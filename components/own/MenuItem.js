export function MenuItem({ children, ...props }) {
  return (
    <div 
      style={{
        padding: '8px 16px',
        cursor: 'pointer',
        ':hover': {
          backgroundColor: '#f5f5f5'
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
}
