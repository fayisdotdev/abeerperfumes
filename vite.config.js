import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  base: mode === "development" ? "/" : "/abeerperfumes/",
  build: {
    outDir: "docs",
  },
}));
