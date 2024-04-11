import MillionLint from '@million/lint';
/// <reference types="vitest" />

import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
const plugins = [react(), tsconfigPaths()];
plugins.unshift(MillionLint.vite())
export default defineConfig({
  // base: '/vite-react-ts-ghactions-template/',
  base: '/zetsite/',
  plugins: plugins,
  build: {
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'c8',
      reporter: ['html', 'lcov']
    }
  }
});