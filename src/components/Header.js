import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleTheme } from '../redux/themeSlice';
import Icon from './Icon';
import styles from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  const handleHomePage = () => {
    navigate('/');
  }
  return (
    <header className={styles.header}>
      <div className={styles.appTitle} onClick={handleHomePage}>
        <span><Icon name={'Logo'} size={35} className="category-icon" />
        </span>
        <span>Task Manager</span>
      </div>
      <button
        className={styles.themeToggle}
        onClick={handleToggleTheme}
        aria-label="Toggle theme"
      >
        <Icon name={'Sun'} size={18} className="category-icon sun" />
        <Icon name={'Moon'} size={18} className="category-icon moon" />
      </button>
    </header>
  );
};

export default Header;