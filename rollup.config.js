import { babel } from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify'

export default {
  input: 'src/plugin.js',
  output: {
    file: 'dist/plugin.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      babelrc: false,
      presets: ['@babel/preset-env']
    }),
    uglify()
  ]
};
