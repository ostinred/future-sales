import React from 'react';

const Input = ({ id, type, label, onChange, placeholder }) => {
  return (
    <div className="input-wrapper">
      {label ? <label htmlFor={id}>{label}</label> : null}

      <input
        id={id}
        onChange={onChange}
        type={type || 'text'}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
