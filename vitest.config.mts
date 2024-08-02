/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'

export default defineConfig(() => ({
  test: {
    environment: 'jsdom',
    globals: true,
    maxConcurrency: 1,
    minThreads: 0,
    maxThreads: 1,
    exclude: ['tsc', 'node_modules'],
  },
}))
