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
