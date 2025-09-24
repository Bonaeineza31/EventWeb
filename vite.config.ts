import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    // extensions: default is fine; you can omit this entirely
  },
  build: {
    target: "esnext",
    outDir: "dist",     // <-- Vercel default
  },
  server: {
    port: 3000,
    open: true,
  },
});
