import { config } from "@config";
import { FC, PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback: FC<{ error: Error }> = ({ error }) => {
  function reloadPage(){
    window.location.reload();
  }

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <p>{error.name}</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      {config.appEnv === "development" && (
        <details>
          <pre>{error.stack ?? JSON.stringify(error, null, 2)}</pre>
        </details>
      )}

      <button onClick={reloadPage}>Reload page</button>
    </div>
  );
};

export const AppErrorBoundary: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
