import { userAPI } from "@api/userAPI";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";


function renderApp() {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
      <ApiProvider api={userAPI}>
        <RouterProvider router={router} />
      </ApiProvider>
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
