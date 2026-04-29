import React from 'react';
import PropTypes from 'prop-types';

/**
 * Input Component
 * A flexible input component with validation states
 */
const Input = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  success,
  disabled = false,
  required = false,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'px-4 py-2 border rounded-lg transition-all duration-200 focus:outline-none focus:ring-2';
  
  const stateClasses = error
    ? 'border-error-500 focus:ring-error-500 focus:border-transparent'
    : success
    ? 'border-success-500 focus:ring-success-500 focus:border-transparent'
    : 'border-gray-300 focus:ring-brand-500 focus:border-transparent';
  
  const disabledClasses = disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white';
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `
    ${baseClasses}
    ${stateClasses}
    ${disabledClasses}
    ${widthClass}
    ${className}
  `.trim();

  return (
    <div className="mb-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={classes}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-error-500">{error}</p>
      )}
      {success && (
        <p className="mt-1 text-sm text-success-500">{success}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
  success: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  fullWidth: PropTypes.bool,
  className: PropTypes.string,
};

export default Input;
