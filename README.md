# Game plan

## Building
- [x] react-ts vite
- [ ] dist for old browsers
- [ ] i18n management

## QA

### MSW
For local development and tests we mock API calls using [msw library](https://mswjs.io/docs/). It works by intercepting all remote requests via a service worker, so this setup should be agnostic to a specific fetching library we want to use. 

TODO: It can also be integrated with Storybook to render states that depend on remote data.

- [x] eslint
- [x] vitest + jsdom
- [x] msw
- [ ] storybook + visual regression solution (e.g. loki)

## API
- [ ] redux-toolkit query

## Events reporting
- [ ] rollbar
- [ ] amplitude
- [ ] adjust
- [ ] pixel

## Dependencies
We pin all out dependencies to a specific version and have renovate bot to notify us about the updates
- [x] renovate bot

## Documentation
- mocking for local development
- [ ] testing patterns
  - how to update mocks in tests
  - you need to wait for data that is being fetched (waitFor method)
- [ ] project structure
- [ ] events reporting
