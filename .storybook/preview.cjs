import { initialize, mswDecorator } from "msw-storybook-addon";
import { withApiProvider } from "./decorators/withApiProvider";

// Initialize MSW
initialize();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  mswDecorator, // makes ServiceWorker globally available
  withApiProvider, // wraps every story in ApiProvider component
];
