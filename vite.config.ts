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
      "@config": path.resolve(__dirname, "./config"),
      "@common/**/*": path.resolve(__dirname, "./src/common/**/*"),
      "@api": path.resolve(__dirname, "./src/services/api/index.ts"),
      "@apiEntities": path.resolve(__dirname, "./src/services/api/entities.ts"),
      "@tests-utils": path.resolve(__dirname, "./tests/utils.tsx"),
    },
  },
});
