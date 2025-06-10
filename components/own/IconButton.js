import React from 'react';

export const IconButton = React.forwardRef(({
  icon,          // The icon component to render
  'aria-label': ariaLabel, // Accessibility label
  variant = 'outline', // Button style variant
  size = 'md',   // Size variant
  isRound = false, // Rounded button
  onClick,       // Click handler
  children,      // Any children
  ...props       // All other props
}, ref) => {
  // Size styles
  const sizeStyles = {
    sm: { width: '32px', height: '32px', fontSize: '14px' },
    md: { width: '40px', height: '40px', fontSize: '16px' },
    lg: { width: '48px', height: '48px', fontSize: '18px' },
  }[size];

  // Variant styles
  const variantStyles = {
    outline: {
      backgroundColor: 'transparent',
      border: '1px solid currentColor',
      color: 'inherit',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    solid: {
      backgroundColor: 'black',
      color: 'white',
      border: 'none',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
    },
    ghost: {
      backgroundColor: 'transparent',
      border: 'none',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
  }[variant];

  return (
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderRadius: isRound ? '50%' : '4px',
        padding: 0, // Icon buttons typically don't have padding
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        ...sizeStyles,
        ...variantStyles,
        ...props.style,
      }}
      {...props}
    >
      {/* Render the icon */}
      {React.cloneElement(icon, {
        style: {
          width: '1em',
          height: '1em',
          fontSize: '1.25em',
          ...icon.props.style,
        },
      })}
      
      {/* Render children if provided */}
      {children}
    </button>
  );
});

// Example HamburgerIcon for completeness
export const HamburgerIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);
