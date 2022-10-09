/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-default-export */
import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
    },
  })
);
