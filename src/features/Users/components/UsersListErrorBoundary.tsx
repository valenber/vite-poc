import { FC, PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback: FC<{ error: Error }> = ({ error }) => {
  return (
    <>
      <h1>Can not display the list of users</h1>
      <h3>Error:</h3>
      <pre>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
};

export const UsersListErrorBoundary: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
  );
};
