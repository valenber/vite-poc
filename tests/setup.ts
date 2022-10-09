// this import is required for typescript to recognise the matchers, it is references in tsconfig.json
import "@testing-library/jest-dom"; 

// this imprort gets matchers to esxtend vitest expect method with them
import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);
