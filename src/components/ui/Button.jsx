/**
 * Button Component
 * 
 * A reusable button component with multiple style variants
 * 
 * @param {string} variant - Style variant: 'primary', 'secondary', or 'outline'
 * @param {string} href - Optional URL to render as anchor tag
 * @param {function} onClick - Click handler for button elements
 * @param {string} type - Button type (button, submit, reset)
 * @param {ReactNode} children - Button content
 */
export default function Button({ 
  children, 
  onClick, 
  href,
  variant = 'primary', 
  type = 'button',
  className = '',
  ...props 
}) {
  const baseStyles = 'px-8 py-4 font-bold text-white transition-all duration-300 rounded-full flex items-center gap-2 justify-center focus:outline-none active:scale-95';
  
  const variants = {
    primary: 'bg-cyan-500 hover:bg-cyan-600 shadow-lg hover:shadow-cyan-500/40 shadow-cyan-500/20 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-cyan-400 hover:-translate-y-1',
    secondary: 'bg-gray-700 hover:bg-gray-600 shadow-lg hover:shadow-gray-500/40 shadow-gray-500/20 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-400 hover:-translate-y-1',
    outline: 'border-2 border-[#2f3b4b] hover:border-cyan-400 hover:text-cyan-400 transition-colors'
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href}
        download
        className={buttonClass}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      {...props}
    >
      {children}
    </button>
  );
}

import PropTypes from 'prop-types';

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
};
