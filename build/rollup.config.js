const vue = require('rollup-plugin-vue')
const css = require('rollup-plugin-css-only')
const json = require('@rollup/plugin-json')
const { name } = require('../package.json')
const typescript = require('rollup-plugin-typescript2')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const file = type => `dist/${name}.${type}.js`
const overrides = {
  compilerOptions: {
    declaration: true
  },
  exclude: ['tests/**/*.ts', 'tests/**/*.tsx', 'node_modules']
}
module.exports = {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es',
    banner:'/* eslint-disable */',
    footer:'/* made by xiaoli */'
  },
  plugins: [
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    json(),
    css({ output: 'bundle.css' }),
    vue()
  ],
  external: ['vue']
}
