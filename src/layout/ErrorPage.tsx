import "./ErrorPage.css";

import { useRouteError } from "react-router-dom";

// react-router-dom does not specify return type of useRouteError so we have to type cast it
// TODO: check if it there are official typing available
interface RoutingError {
  statusText: string;
  message: string;
  status: number;
}

export function ErrorPage() {
  const error = useRouteError() as RoutingError;
  // TODO: report to monitoring service e.g. Rollbar
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <div className="ErrorPage">
      <h1>Oops!</h1>
      <p>Sorry, this URL does not exist in the app.</p>
      <h3>{`${error.status}: ${error.statusText}` || error.message}</h3>
    </div>
  );
}
