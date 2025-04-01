import React from 'react';
import { ICONS } from '../utils/iconConfig';
import styles from './Icon.module.css';

const Icon = ({ 
  name, 
  size = 20,
  color,
  className = '',
  ...props 
}) => {
  const IconComponent = ICONS[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  const style = {
    width: size,
    height: size,
    ...props.style
  };
  
  return <IconComponent className={`${styles.icon} ${className}`} style={style} {...props} />;
};

export default Icon;