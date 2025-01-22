import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@types": "/src/typings/types",
    },
  },
});
