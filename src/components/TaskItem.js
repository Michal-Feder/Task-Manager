import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  toggleTaskCompletion,
  deleteTask,
} from '../redux/taskSlice';
import Icon from './Icon';
import styles from './TaskItem.module.css';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showActions, setShowActions] = useState(false);
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [swiped, setSwiped] = useState(false);
  const taskRef = useRef(null);
  const touchStartXRef = useRef(0);

  const handleToggleCompletion = (e) => {
    e.stopPropagation();
    dispatch(toggleTaskCompletion(task.id));
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteTask(task.id));
  };

  const handleEdit = (e) => {
    e.stopPropagation();
    navigate(`/task/edit/${task.id}`);
  };

  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const touchCurrentX = e.touches[0].clientX;
    const diff = touchStartXRef.current - touchCurrentX;
    
    if (diff > 0) {
      const distance = Math.min(diff, 30);
      setSwipeDistance(distance);
    }
  };

  const handleTouchEnd = () => {
    if (swipeDistance > 15) {
      setShowActions(true);
      setSwiped(true);
    } else if (!swiped) {
      setSwipeDistance(0);
    }
  };

  const handleClickOutside = (e) => {
    if (taskRef.current && !taskRef.current.contains(e.target)) {
      setSwipeDistance(0);
      setShowActions(false);
      setSwiped(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive = showActions || swiped || swipeDistance > 0;

  return (
    <div
      ref={taskRef}
      className={styles.taskCardContainer}
      onMouseEnter={() => !swiped && setShowActions(true)}
      onMouseLeave={() => !swiped && setShowActions(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={`${styles.taskCard} ${task.completed ? styles.completed : ''}`}
        style={{
          width: showActions || swipeDistance > 20 ? 'calc(100% - 30px)' : '100%',
        }}
      >
        <div className={styles.taskInfo}>
          <input
            type="checkbox"
            className='checkbox-container'
            checked={task.completed}
            onChange={handleToggleCompletion}
          />
          <div
            className={styles.categoryIcon}
            style={{ backgroundColor: `var(--${task.category.replace(" ", "-")})`|| '#757575' }}
          >
            <Icon name={task.category} size={23} className="category-icon" />
          </div>
          <div className={styles.taskDetails}>
            <div className={styles.taskTitle}>{task.category}</div>
            <div className={styles.taskCategory}>{task.title}</div>
          </div>
        </div>
      </div>
      <div
        className={styles.taskActions}
        style={{
          opacity: isActive ? '1' : '0',
          pointerEvents: isActive ? 'all' : 'none'
        }}
      >
        <button 
          className={styles.actionButton} 
          onClick={handleEdit}
        >
          <Icon name={'Edit'} size={20} className="category-icon edit" />
        </button>
        <button 
          className={styles.actionButton} 
          onClick={handleDelete}
        >
          <Icon name={'Trash'} size={20} className="category-icon del" />
        </button>
      </div>
    </div>
  );
};

export default React.memo(TaskItem);