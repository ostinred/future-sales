import React from 'react';

const Input = ({ id, name, reference, type, label, onChange, placeholder }) => {
  return (
    <div className="input-wrapper">
      {label ? <label htmlFor={name || id}>{label}</label> : null}

      <input
        id={id}
        name={name || id}
        ref={reference}
        onChange={onChange}
        type={type || 'text'}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
