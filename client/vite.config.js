import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://api.schiphol.nl",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, "/public-flights"),
      },
    },
  },

  plugins: [react()],
  // build: {
  //   outDir: "dist",
  // },
});
