import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, updateTask, deleteTask } from '../redux/taskSlice';
import CategorySelect from './CategorySelect';
import InputField from './InputField';
import styles from './TaskForm.module.css';

const TaskForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [completed, setCompleted] = useState(false);
  const [fieldsReq, setFieldsReq] = useState(false);
  
  const isEditMode = !!id;

  useEffect(() => {
    if (isEditMode) {
      const task = tasks.find(t => t.id === id);
      if (task) {
        setTitle(task.title || '');
        setCategory(task.category || '');
        setCompleted(task.completed || false);
      }
    }
  }, [id, tasks, isEditMode]);
  
  const handleSave = () => {
    if (!title || !category) {
      setFieldsReq(true);
      return;
    }
    
    const taskData = {
      title,
      category,
      completed,
    };
    
    if (isEditMode) {
      dispatch(updateTask({
        id,
        ...taskData
      }));
    } else {
      dispatch(addTask(taskData));
    }
    
    navigate('/');
  };

  return (
    <form className={styles.formContainer} onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
      <h5 className={styles.formTitle}>{isEditMode ? 'Edit Task' : 'Create New Task'}</h5>

      <div className={styles.formGroup}>
        <CategorySelect
          value={category}
          onChange={setCategory}
          className="form-control"
          name="Select category"
        />
      </div>
      <div className={styles.formGroup}>
        <InputField
          id="title"
          type="text"
          className="form-control"
          value={title}
          onChange={setTitle}
          placeholder="Name your task"
          onSave={setFieldsReq}
        />
      </div>
      {fieldsReq && <span className={styles.fieldsRequired}>* fields required</span>}
      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.saveButton}>
          {isEditMode ? 'Save changes' : 'Save new task'}
        </button>
      </div>
      {isEditMode &&
      <div className={styles.buttonGroup}>
        <button 
          type="button" 
          className={styles.borderButton} 
          onClick={(e) => setCompleted(!completed)}
          disabled={completed}
        >
          {'Mark as completed'} 
        </button>
      </div>}
    </form>
  );
};

export default React.memo(TaskForm);