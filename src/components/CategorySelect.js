import React, { useState, useRef, useEffect } from 'react';
import { CATEGORIES } from '../utils/iconConfig';
import Icon from './Icon';
import styles from './CategorySelect.module.css';

const CategorySelect = ({
  value,
  onChange,
  className,
  name,
  multiple = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleCheckboxChange = (category) => {
    let newSelectedCategories = Array.isArray(value) ? [...value] : [];
    
    if (newSelectedCategories.includes(category)) {
      newSelectedCategories = newSelectedCategories.filter(cat => cat !== category);
    } else {
      newSelectedCategories.push(category);
    }
    
    onChange(newSelectedCategories);
  };
  
  const handleSingleSelect = (category) => {
    onChange(category);
    setIsOpen(false);
  };
  
  const getDisplayValue = () => {
    if (!multiple) return value || name;
    
    if (!Array.isArray(value) || value.length === 0) return name;
    
    if (value.length === 1) return value[0];
    
    return `${value.length} selected`;
  };
  
  
  if (multiple) {
    return (
      <div className={`${styles.customDropdown} ${className || ''}`} ref={dropdownRef}>
        <div
          className={styles.dropdownHeader}
          onClick={() => setIsOpen(!isOpen)}
        >
          {getDisplayValue()}
          <span className={styles.dropdownArrow}>{isOpen ? '▲' : '▼'}</span>
        </div>
        
        {isOpen && (
          <div className={styles.dropdownMenu}>
            {CATEGORIES.map((category) => (
              <div key={category} className={styles.checkboxItem}>
                <label>
                  <input
                    type="checkbox"
                    checked={Array.isArray(value) && value.includes(category)}
                    onChange={() => handleCheckboxChange(category)}
                  />
                  <div className={styles.categoryIconSelect}  style={{ backgroundColor: `var(--${category.replace(" ", "-")})` }}>
                    <Icon name={category} size={18} className="category-icon" />
                  </div>
                  <span>{category}</span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
  
  return (
    <div className={`${styles.customDropdown} ${className || ''}`} ref={dropdownRef}>
      <div
        className={styles.dropdownHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        {value ? (
          <div className={styles.selectedCategory}>
            <div className={styles.categoryIconSelect} style={{ backgroundColor: `var(--${value.replace(" ", "-")})` }}>
              <Icon name={value} size={18} className="category-icon" />
            </div>
            <span>{value}</span>
          </div>
        ) : (
          <span>{name}</span>
        )}
        <span className={`${styles.dropdownArrow} ${styles.select}`}>{isOpen ? '▲' : '▼'}</span>
      </div>
      
      {isOpen && (
        <div className={styles.dropdownMenu}>
          {CATEGORIES.map((category) => (
            <div 
              key={category} 
              className={styles.dropdownItem}
              onClick={() => handleSingleSelect(category)}
            >
              <div className={styles.categoryIconSelect} style={{ backgroundColor: `var(--${category.replace(" ", "-")})` }}>
                <Icon name={category} size={18} className="category-icon" />
              </div>
              <span>{category}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySelect;