const { loadConfigFromFile, mergeConfig } = require("vite");
const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    // In this function we load the main vite configuration file and
    // add it to the storybook config to make sure the component stories
    // use the same config as the app, e.g. import aliases are resolved correctly.
    // We can later overwrite parts of it with storybook-specific config.
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.js")
    );

    return mergeConfig(config, {
      ...userConfig,
      // manually specify plugins to avoid conflict
      plugins: [],
    });
  },
};
