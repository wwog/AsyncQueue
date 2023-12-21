import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: false,
  clean: true,
  minify: false,
  format: ['cjs', 'esm'],
  dts: true,
})