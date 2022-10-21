import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";

export const ErrorManagement = () => {
  // AppErrorBoundary test for react lifecucle error
  const [renderFire, setRenderFire] = useState(false);

  const Fire = () => {
    throw new Error("💥 Lifecycle Fire!!! 💥");
  };

  function renderFireComponent() {
    setRenderFire(true);
  }

  // AppErrorBoundary test for runtime error
  const errorHandler = useErrorHandler();

  function throwRuntimeError() {
    const runtimeError = new Error("💥 Runtime Fire!!! 💥");
    errorHandler(runtimeError);
  }

  return (
    <>
      <h3>Exception management with error boundary</h3>
      <p>Press buttons to simulate errors</p>

      <button onClick={renderFireComponent}>Render faulty component</button>

      {renderFire && <Fire />}

      <button onClick={throwRuntimeError}>Throw runtime error</button>
    </>
  );
};
