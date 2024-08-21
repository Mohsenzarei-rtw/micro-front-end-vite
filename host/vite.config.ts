import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import federation from "@originjs/vite-plugin-federation";

// router
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // router
    TanStackRouterVite(),

    // micro frontend
    federation({
      name: "host",
      remotes: {
        micro1: "http://localhost:3001/assets/remoteEntry.js",
        micro2: "http://localhost:3002/assets/remoteEntry.js",
        micro3: "http://localhost:3003/assets/remoteEntry.js",
      },
      shared: ["react"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",

    minify: false,
    cssCodeSplit: false,
  },
});
