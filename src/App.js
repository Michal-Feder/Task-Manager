import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomePage from './pages/HomePage';
import TaskManagementPage from './pages/TaskManagementPage';
import { useAnalytics } from './utils/analytics';
import './App.css';

function App() {

  useAnalytics();
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  return (
    <div className={`app ${isDarkMode ? 'dark-theme' : 'light-theme'}`}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/task/new" element={<TaskManagementPage />} />
        <Route path="/task/edit/:id" element={<TaskManagementPage />} />
      </Routes>
    </div>
  );
}

export default App;