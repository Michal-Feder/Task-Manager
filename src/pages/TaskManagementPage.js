import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import Icon from '../components/Icon';
import styles from './TaskManagementPage.module.css';

const TaskManagementPage = () => {
  const navigate = useNavigate();
 
  const handleBack = () => {
    navigate('/');
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <button className={styles.backButton} onClick={handleBack}>
          <Icon name={'Back'} size={20} className="category-icon back" />
          Back
        </button>
       
        <TaskForm />
      </div>
    </>
  );
};

export default TaskManagementPage;