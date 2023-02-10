import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import htmlTemplate from 'rollup-plugin-generate-html-template';
import replace from '@rollup/plugin-replace';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import postcss from 'rollup-plugin-postcss';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import svgo from 'rollup-plugin-svgo';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import copy from 'rollup-plugin-copy';

const mode = process.env.MODE || 'development';
const isProd = mode === 'production';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'res/js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    htmlTemplate({
      template: 'public/index.html',
      target: 'res/index.html',
    }),
    url({
      publicPath: '/media/',
    }),
    svgr(),
    svgo(),
    copy({
      targets: [{ src: 'public/favicon.ico', dest: 'res' }],
    }),
    resolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    commonjs(),
    typescript({
      tsconfig: 'tsconfig.json',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(
        isProd ? 'production' : 'development',
      ),
    }),
    postcss({
      extract: false,
      modules: (path) => !!path.includes('.module.'),
      use: ['less'],
    }),
    !isProd &&
      serve({
        open: true,
        contentBase: ['', 'res'],
        host: 'localhost',
        port: 3000,
      }),
    !isProd && livereload({ watch: 'res' }),
    isProd && uglify(),
    isProd && terser(),
    isProd && del({ targets: 'res/*' }),
  ],
};
