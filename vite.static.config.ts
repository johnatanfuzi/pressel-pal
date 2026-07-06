import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";

// Standalone static SPA build for shared hosting (Hostinger, cPanel, etc.)
// No SSR, no TanStack Start, no Nitro, no Cloudflare Worker.
// Run: bun run build:static  ->  outputs dist/index.html + assets (relative paths)
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  root: resolve(__dirname, "static"),
  base: "./",
  publicDir: resolve(__dirname, "public"),
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
