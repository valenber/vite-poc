import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

function renderApp() {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <StrictMode>
      <App />
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
