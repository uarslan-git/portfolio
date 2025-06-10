let componentInstance = {
  state: [],
  index: 0,
  renderCount: 0,
};

function useState(initialValue) {
  // Capture the current index in closure
  const currentIndex = componentInstance.index;
  
  // Initialize state if it doesn't exist
  if (componentInstance.state[currentIndex] === undefined) {
    componentInstance.state[currentIndex] = initialValue;
  }

  // Create setter function for this specific state
  function setState(newValue) {
    componentInstance.state[currentIndex] = newValue;
    // Trigger a "re-render" (simulated)
    componentInstance.index = 0;
    componentInstance.renderCount++;
    console.log(`State updated. Render count: ${componentInstance.renderCount}`);
  }

  // Move to next state index for next hook call
  componentInstance.index++;

  return [componentInstance.state[currentIndex], setState];
}

// Simulated component "render"
function simulateRender() {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  
  console.log(`Render ${componentInstance.renderCount}: isOpen=${isOpen}, count=${count}`);
  
  // Simulate some state updates
  if (componentInstance.renderCount === 0) {
    setIsOpen(true);
    setCount(10);
  }
  
  return { isOpen, count, setIsOpen, setCount };
}

// First render
let component = simulateRender(); // Outputs initial state
// Second render triggered by state updates
component = simulateRender(); // Outputs updated state
