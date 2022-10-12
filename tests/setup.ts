// this import is required for typescript to recognise the matchers, this file is referenced in tsconfig.json
import "@testing-library/jest-dom";

// this import extends vitest expect method with jest-dom matchers
import matchers from "@testing-library/jest-dom/matchers";
import { fetch } from "cross-fetch";
import { expect } from "vitest";

import { server } from "../src/mocks/server";

// here we add a fetch polyfill to use inside testing environment
// this is required if our data-fetching solution uses browser fetch
// node 17.5 has experimental support for built-in fetch,
// so hopefully in no so distant future this polyfill can be removed
global.fetch = fetch;

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

expect.extend(matchers);
