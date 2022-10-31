# Application setup

## Build

The app builds using [Vite](https://vitejs.dev/). The basic configuration includes support for legacy browsers. If your app is not expected to run on older browsers you can reduce the bundle size by disabling `legacy plugin` in [vite.config.ts](./vite.config.ts).

## QA

### Testing

For unit and component testing we use [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### API Mocking - MSW

For local development and tests we mock API calls using [msw library](https://mswjs.io/docs/). It works by intercepting all remote requests via a service worker, so this setup should be agnostic to a specific fetching library we want to use.

### Storybook

For developing UI components in isolation we ca use Storybook. Create a file next to the component you are testing named `[componntName].stories.tsx` and render the states you want to examine e.g.

```jsx
import { noop } from "@tests/utils";

import { NewUserForm } from "./NewUserForm";

export default {
  title: "NewUserForm",
  component: NewUserForm,
};

export const Base = () => <NewUserForm submitCallTrigger={noop} />;
```

#### MSW in Storybook

Storybook can take advantage of mocked endpoints to render different states of components. We use the official [MSW.js addon](https://github.com/mswjs/msw-storybook-addon) to integrate it. This allows us to use mocked endpoints in out stories. We include the handlers used for local development in the global parameters object ([see here](./.storybook/preview.cjs')). We can also override those handlers inside specific stories:

```jsx
export const Errored = () => <Users />;

Errored.parameters = {
  msw: {
    handlers: [
      rest.get("/users", (_req, res, ctx) => {
        return res(ctx.status(500));
      }),
    ],
  },
};
```

#### TODO:

- [ ] visual regression testing e.g. [loki](https://loki.js.org/) or [chromatic](https://www.chromatic.com/pricing).

### Git hooks

Before each commit we run our **tests** to make sure commited code hasn't broken anything.
Before pushing the code to the repo we run **typecheck** and **lint** as an aditional QA check.
To manage this configuration we use [husky](https://typicode.github.io/husky/#/?id=create-a-hook) package.

## Data fetching and caching

We fetch and cache data using [RTK query](https://redux-toolkit.js.org/rtk-query/overview). It is a sub-library of Redux Toolkit and it can be seamlessly integrated with redux store if the app grows in complexity.

## i18n

- [ ] react-i18next

## Events reporting

- [ ] events reporting integration
  - [ ] rollbar
  - [ ] amplitude
  - [ ] adjust

## Errors Handling

We have setup a basic [error boundary](https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react) at app-root level. This catches errors thrown inside the app and alows us to render backup UI for the user. There are 3 ways to use an error boundary.

- A component may throw during it's lifecyce. In this case the boundary will catch automatically.
- We may want to explicitly throw inside out code. In this case we should pass the error to the function returned by [useErrorHandler](https://github.com/bvaughn/react-error-boundary#useerrorhandlererror-unknown) hook.

```typescript
const errorHandler = useErrorHandler();
errorHandler(new Error("There was an problem"));
```

- We may want to monitor an error as part of a state. For example in an API hook generated by RTK Query. For this we need to pass the error reference directly into `useErrorHandler` hook, so it can react to it's value change.

```typescript
const { data, error } = userAPI.useGetAllUsersQuery();

useErrorHandler(error);
```

More error boundaries can be added at different levels of the app to limit the effect it has on the user experience. For example if one of the views throw, we may want to allow the user to navigate to another section.

- TODO: add error event reporting when the boundary catches (e.g. with rollbar).

## Routing

The routing is managed with [react-router](https://reactrouter.com/en/main). The package provides it's own error boundary to catch navigation errors, allowing to set a custom fallback view.
To handle navigation we use AppLayout component that wrapps around the entre app at the root path. The specific route views are rendered through [Outlet](https://reactrouter.com/en/main/components/outlet) in this component.

## Dependencies management

We pin all out dependencies to a specific version and have renovate bot to notify us about the updates

## Styling

- TODO: pick and integrate a styling solution (e.g. Sass)

## Guidelines

- explain mocking for local development
- testing patterns
  - how to update mocks in tests
  - you need to wait for data that is being fetched (waitFor method)
- define project structure - what goes where
