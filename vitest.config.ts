import { defineConfig } from "vitest/config";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: "./src/setupTests.ts",
    globals: true,
  },
  plugins: [createHtmlPlugin()],
});
