let currentEffectDeps = null;
let cleanupFn = null;
let effectIndex = 0;

function useEffect(callback, deps) {
  const hasNoDeps = !deps;
  const hasChangedDeps = currentEffectDeps
    ? deps.some((dep, i) => dep !== currentEffectDeps[i])
    : true;

  if (hasNoDeps || hasChangedDeps) {
    // Clean up previous effect if it exists
    if (cleanupFn) cleanupFn();

    // Run the effect and store cleanup
    cleanupFn = callback();
    currentEffectDeps = deps;
  }

  effectIndex++;
}
