import { initialize, mswDecorator } from "msw-storybook-addon";
import { withApiProvider } from "./decorators/withApiProvider";
import { handlers } from "../src/mocks/handlers";

// Initialize MSW
initialize();

// these parameters and decorators will be applied to all stories
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: {
    handlers: [...handlers], // these handlers will be applied to all stories
  },
};

export const decorators = [
  mswDecorator, // makes ServiceWorker globally available
  withApiProvider, // wraps every story in ApiProvider component
];
