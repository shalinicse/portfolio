import { defineConfig } from "vite";

export default defineConfig({
  optimizeDeps: {
    disabled: false,
  },
  base: process.env.VITE_BASE_PATH || "/portfolio",
});
