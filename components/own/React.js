// Simulate a component with hooks
let currentComponent = {
  state: [],
  effects: [],
  stateIndex: 0,
  effectIndex: 0,
};

function resetHooks() {
  currentComponent.stateIndex = 0;
  currentComponent.effectIndex = 0;
}

function render(Component) {
  resetHooks();
  Component();
}

// Example usage:
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  console.log("Render:", count);
  return { setCount };
}

// Simulate renders
const { setCount } = render(Counter); // Logs: "Render: 0", "Count changed: 0"
setCount(1);
render(Counter); // Logs: "Render: 1", "Count changed: 1"
