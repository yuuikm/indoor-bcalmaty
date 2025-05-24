import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "node:path";
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/

export default defineConfig(({ mode }) => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        algorithms: path.resolve(__dirname, 'src/algorithms'),
        assets: path.resolve(__dirname, 'src/assets'),
        components: path.resolve(__dirname, 'src/components'),
        contexts: path.resolve(__dirname, 'src/contexts'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        pages: path.resolve(__dirname, 'src/pages'),
        services: path.resolve(__dirname, 'src/services'),
        store: path.resolve(__dirname, 'src/store'),
        styles: path.resolve(__dirname, 'src/styles'),
        utils: path.resolve(__dirname, 'src/utils'),
        floors: path.resolve(__dirname, 'src/floors'),
      },
    },
    base: './',
    build: {
      outDir: 'build',
      emptyOutDir: true,
    },
    esbuild: {
      pure: mode === "production" ? ["console.log"] : [],
    },
  };
});
