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
- [ ] storybook + loki

## API
- [ ] redux-toolkit query

## Events reporting
- [ ] rollbar
- [ ] amplitude
- [ ] adjust
- [ ] pixel

## Dependencies
- [ ] renovate bot

## Documentation
- [ ] testing patterns
- [ ] project structure
- [ ] events reporting
