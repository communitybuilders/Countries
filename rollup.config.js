import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import {terser} from 'rollup-plugin-terser';

export default ({
  input: 'dist/index',
  output: [{
    file: 'dist/index.esm.js',
    format: 'esm',
    sourcemap: true
  }],
  plugins: [
    commonjs(),
    resolve({
      preferBuiltins: false,
    }),
    json(),
    terser(),
  ]
});
