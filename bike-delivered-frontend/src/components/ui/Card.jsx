import React from 'react';
import PropTypes from 'prop-types';

/**
 * Card Component
 * A flexible card container component
 */
const Card = ({
  children,
  title,
  subtitle,
  action,
  hover = true,
  padding = 'md',
  className = '',
  onClick,
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };

  const hoverClass = hover && onClick ? 'cursor-pointer hover:shadow-medium transition-shadow duration-200' : '';
  
  const baseClasses = 'bg-white rounded-xl shadow-soft';

  const classes = `
    ${baseClasses}
    ${paddingClasses[padding]}
    ${hoverClass}
    ${className}
  `.trim();

  const CardContent = (
    <>
      {(title || subtitle || action) && (
        <div className="flex items-start justify-between mb-4">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
            {subtitle && <p className="text-sm text-gray-500 mt-0.5">{subtitle}</p>}
          </div>
          {action && <div>{action}</div>}
        </div>
      )}
      {children}
    </>
  );

  if (onClick) {
    return (
      <div className={classes} onClick={onClick}>
        {CardContent}
      </div>
    );
  }

  return (
    <div className={classes}>
      {CardContent}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  action: PropTypes.node,
  hover: PropTypes.bool,
  padding: PropTypes.oneOf(['none', 'sm', 'md', 'lg']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
