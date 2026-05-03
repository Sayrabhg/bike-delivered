import { PASSWORD_MIN_LENGTH, PHONE_NUMBER_LENGTH, OTP_LENGTH } from '../config/constants';

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} {valid: boolean, errors: string[]}
 */
export const validatePassword = (password) => {
  const errors = [];
  
  if (password.length < PASSWORD_MIN_LENGTH) {
    errors.push(`Password must be at least ${PASSWORD_MIN_LENGTH} characters long`);
  }
  
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one number');
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
};

/**
 * Validate phone number
 * @param {string} phone - Phone number to validate
 * @returns {boolean} True if valid
 */
export const isValidPhone = (phone) => {
  const cleaned = phone.replace(/\D/g, '');
  return cleaned.length === PHONE_NUMBER_LENGTH;
};

/**
 * Validate OTP
 * @param {string} otp - OTP to validate
 * @returns {boolean} True if valid
 */
export const isValidOTP = (otp) => {
  const cleaned = otp.replace(/\D/g, '');
  return cleaned.length === OTP_LENGTH;
};

/**
 * Validate required field
 * @param {string} value - Value to validate
 * @returns {boolean} True if not empty
 */
export const isRequired = (value) => {
  return value && value.trim().length > 0;
};

/**
 * Validate form data
 * @param {object} data - Form data
 * @param {object} rules - Validation rules
 * @returns {object} {valid: boolean, errors: object}
 */
export const validateForm = (data, rules) => {
  const errors = {};
  
  Object.keys(rules).forEach(field => {
    const value = data[field];
    const fieldRules = rules[field];
    
    if (fieldRules.required && !isRequired(value)) {
      errors[field] = fieldRules.requiredMessage || `${field} is required`;
      return;
    }
    
    if (value && fieldRules.email && !isValidEmail(value)) {
      errors[field] = fieldRules.emailMessage || 'Invalid email format';
    }
    
    if (value && fieldRules.phone && !isValidPhone(value)) {
      errors[field] = fieldRules.phoneMessage || `Phone number must be ${PHONE_NUMBER_LENGTH} digits`;
    }
    
    if (value && fieldRules.password) {
      const passwordValidation = validatePassword(value);
      if (!passwordValidation.valid) {
        errors[field] = passwordValidation.errors[0];
      }
    }
    
    if (value && fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = `Must be at least ${fieldRules.minLength} characters`;
    }
  });
  
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
};
