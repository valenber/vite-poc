# Application setup

## Build

The app builds using [Vite](https://vitejs.dev/).

- [ ] dist for old browsers

## QA

### Testing

For unit and component testing we use [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### API Mocking

#### MSW

For local development and tests we mock API calls using [msw library](https://mswjs.io/docs/). It works by intercepting all remote requests via a service worker, so this setup should be agnostic to a specific fetching library we want to use.

TODO: It can also be integrated with Storybook to render states that depend on remote data. Storybook 7 works with vite

- [ ] storybook + visual regression solution (e.g. loki)

## Data fetching and caching

- [ ] RTK query

## App i18n

- [ ] react-i18next

## Events reporting

- [ ] events reporting
  - [ ] rollbar
  - [ ] amplitude
  - [ ] adjust
  - [ ] pixel

## Dependencies management

We pin all out dependencies to a specific version and have renovate bot to notify us about the updates

## Docs ToDO

- explain mocking for local development
- testing patterns
  - how to update mocks in tests
  - you need to wait for data that is being fetched (waitFor method)
- define project structure - what goes where
