import svelte from 'rollup-plugin-svelte'
import resolve from '@rollup/plugin-node-resolve'
import pkg from './package.json'
import commonjs from '@rollup/plugin-commonjs'
import sveltePreprocess from 'svelte-preprocess'
import typescript from '@rollup/plugin-typescript'

const name = pkg.name
  .replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
  .replace(/^\w/, (m) => m.toUpperCase())
  .replace(/-\w/g, (m) => m[1].toUpperCase())

export default {
  input: 'src/index.ts',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name }
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess()
    }),
    resolve(),
    commonjs(),
    typescript()
  ]
}
