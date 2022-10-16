/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */

import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), legacy({ targets: ["defaults", "not IE 11"] })],
  server: {
    port: 8080,
  },
  preview: {
    port: 8081,
  },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/services/api"),
      "@common": path.resolve(__dirname, "./src/common/"),
      "@config": path.resolve(__dirname, "./config"),
      "@tests-utils": path.resolve(__dirname, "./tests/utils.tsx"),
    },
  },
});
