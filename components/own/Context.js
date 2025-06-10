// Simplified createContext
function createContext(defaultValue) {
  const context = {
    _currentValue: defaultValue,
    Provider: function ({ value, children }) {
      context._currentValue = value;
      return children;
    },
  };
  return context;
}

// Simplified useContext
function useContext(context) {
  return context._currentValue;
}
