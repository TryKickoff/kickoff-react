import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import { minify } from 'uglify-es'

let pkg = require('./package.json')
let external = Object.keys(pkg.dependencies)

export default {
  entry: 'src/index.js',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules',
      presets: [ 'es2015-rollup', 'react' ]
    }),
    uglify({}, minify)
  ],
  external: external,
  globals: {
    'react': 'React'
  },
  targets: [
    {
      dest: pkg.main,
      format: 'umd',
      moduleName: 'KickoffReactComponents',
      sourceMap: true
    },
    {
      dest: pkg.module,
      format: 'es',
      sourceMap: true
    }
  ]
}
