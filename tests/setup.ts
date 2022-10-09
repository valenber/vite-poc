// this import is required for typescript to recognise the matchers, this file is referenced in tsconfig.json
import "@testing-library/jest-dom"; 

// this import extends vitest expect method with jest-dom matchers
import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);
