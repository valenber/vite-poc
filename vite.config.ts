/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */

import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  server: {
    port: 8080,
  },
  preview: {
    port: 8081,
  },
  resolve: {
    alias: {
      "@config": path.resolve(__dirname, './config'),
    },
  },
});
