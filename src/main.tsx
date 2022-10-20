import { userAPI } from "@api/userAPI";
import { AppErrorBoundary } from "@common/components/AppErrorBoundary";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { App } from "./App";
import { AppLayout } from "./layout";
import { ErrorPage } from "./layout/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [{ path: "app", element: <App />, errorElement: <ErrorPage /> }],
  },
]);

function renderApp() {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
      <AppErrorBoundary>
        <ApiProvider api={userAPI}>
          <RouterProvider router={router} />
        </ApiProvider>
      </AppErrorBoundary>
    </StrictMode>
  );
}

// This conditional is needed because the app will make an API call on initial render.
// At the same time, starting the MSW worker is an asyncronous acton, so we may see a race condition
// where worker has not started yet, but the request is already dispatched.
if (process.env.NODE_ENV === "development") {
  const { worker } = await import("./mocks/browser");

  worker
    .start()
    .then(() => {
      renderApp();
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error("Failed to start MSW worker", { err });
    });
} else {
  renderApp();
}
