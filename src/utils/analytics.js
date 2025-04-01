import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';

export const useAnalytics = () => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(getPageNameFromPath(location.pathname));
  }, [location.pathname]);
  
  const getPageNameFromPath = (path) => {
    switch (path) {
      case '/':
        return 'Home Page';
      case '/task/new':
        return 'Task Management Page (Add)';
      default:
        if (path.startsWith('/task/edit/')) {
          return 'Task Management Page (Edit)';
        }
        return 'Unknown Page';
    }
  };
  
  const trackPageView = (pageName) => {
    console.log(`User visited: ${pageName}`);
  };
  
  
  return {
    trackPageView
  };
};