import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import CategorySelect from '../components/CategorySelect';
import Icon from '../components/Icon';
import styles from './HomePage.module.css';

const HomePage = () => {
  const navigate = useNavigate();
  const tasks = useSelector(state => state.tasks.tasks);
  const [incompleteCategoryFilter, setIncompleteCategoryFilter] = useState([]);
  const [completedCategoryFilter, setCompletedCategoryFilter] = useState([]);

  const handleNewTask = () => {
    navigate('/task/new');
  };

  const matchesCategories = (task, categoryFilter) => {
    if (categoryFilter.length === 0) return true;
    return categoryFilter.includes(task.category);
  };

  const incompleteTaskCount = useMemo(() => {
    return tasks.filter(task => !task.completed && matchesCategories(task, incompleteCategoryFilter)).length;
  }, [tasks, incompleteCategoryFilter]);
  
  const completedTaskCount = useMemo(() => {
    return tasks.filter(task => task.completed && matchesCategories(task, completedCategoryFilter)).length;
  }, [tasks, completedCategoryFilter]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.taskSections}>
          <div className={styles.inProgressSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sp}>In progress <span style={{ color: '#5F33E1', marginLeft: '3px' }}>
                {incompleteTaskCount}
                </span></span>
              <CategorySelect
                value={incompleteCategoryFilter}
                onChange={setIncompleteCategoryFilter}
                placeholder="Filter Category"
                name="Filter"
                className={styles.filter}
                multiple={true}
              />
            </div>
            <TaskList
              filter={incompleteCategoryFilter}
              completionFilter="incomplete"
              multipleFilter={true}
            />
          </div>
          <div className={styles.completedSection}>
            <div className={styles.sectionHeader}>
              <span className={styles.sp}>Completed <span style={{ color: '#5F33E1', marginLeft: '3px' }}>
                {completedTaskCount}
                </span></span>
              <CategorySelect
                value={completedCategoryFilter}
                onChange={setCompletedCategoryFilter}
                placeholder="Filter Category"
                name="Filter"
                multiple={true}
                className={styles.filter}
              />
            </div>
            <TaskList
              filter={completedCategoryFilter}
              completionFilter="completed"
              multipleFilter={true}
            />
          </div>
        </div>
        <button className={styles.btn} onClick={handleNewTask}>
          <Icon name={'Plus'} size={18} className="category-icon plus" />
          New Task
        </button>
      </div>
    </>
  );
};

export default HomePage;