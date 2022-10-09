import { render, screen } from "@testing-library/react";

import { App } from "./App";

test("DOM smoke test", () => {
  render(<App />);

  expect(screen.getByText("Vite - PoC")).toBeVisible();
  expect(screen.queryByText("smoke")).not.toBeInTheDocument();
});
