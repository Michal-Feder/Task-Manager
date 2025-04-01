import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import styles from './TaskList.module.css';

const TaskList = ({ filter, completionFilter }) => {
  const tasks = useSelector((state) => state.tasks.tasks);
  
  const filteredTasks = useMemo(() => {
    let filtered = [...tasks];
    
    if (filter) {
      if (Array.isArray(filter) && filter.length > 0) {
        filtered = filtered.filter(task => filter.includes(task.category));
      } else if (typeof filter === 'string' && filter !== '') {
        filtered = filtered.filter(task => task.category === filter);
      }
    }
    
    if (completionFilter === 'completed') {
      filtered = filtered.filter(task => task.completed);
    } else if (completionFilter === 'incomplete') {
      filtered = filtered.filter(task => !task.completed);
    }
    
    return filtered.sort((a, b) => 
      new Date(b.createdAt) - new Date(a.createdAt)
    );
  }, [tasks, filter, completionFilter]);
  
  return (
    <>
      <div className={styles.taskList}>
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <div className={styles.emptyMessage}>No tasks found</div>
        )}
      </div>
    </>
  );
};

export default React.memo(TaskList);