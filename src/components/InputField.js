import React, { useEffect, useState } from 'react';
import styles from './InputField.module.css';
import Icon from './Icon';

const InputField = ({ placeholder = "", required, value, onChange, onSave }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);

  
  const handleFocus = () => {
    setIsFocused(true);
  };
  
  const handleBlur = () => {
    setIsFocused(false);
  };
  
  const handleChange = (e) => {
    onChange(e.target.value)
    onSave(false);
    if (e.target.value.endsWith(" ")) {
      setHasError(true);
    } else {
      setHasError(false);
    }
  };
  
  const handleClear = () => {
    onSave(false)
    onChange('')
    setHasError(false);
    document.querySelector(`.${styles.inputField}`).focus();
  };
  
  const containerClasses = [
    styles.inputContainer,
    isFocused ? styles.focused : '',
    value ? styles.filled : '',
    hasError ? styles.error : ''
  ].filter(Boolean).join(' ');
  
  return (
    <>
      <div className={`inputContainer ${containerClasses}`}>
        <label className={styles.inputLabel}>{placeholder}</label>
        <input
          type="text"
          className={styles.inputField}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          required={required}
        />
        {value && (
          <button className={styles.clearButton} onClick={handleClear}>
            <Icon name={'Close'} size={20}/>
          </button>
        )}
      </div>
      {hasError && (
        <p className={styles.errorMessage}>error text</p>
      )}
    </>
  );
};

export default InputField;