import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

(async () => {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./mocks/browser");
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    worker.start();
  }
})();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
