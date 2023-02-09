import less from 'rollup-plugin-less';
import pug from 'rollup-plugin-pug';

import fs from 'fs';

const jquery = fs.readFileSync('src/ext/jquery-3.6.2.min.js');

export default {
  input: 'src/index.js',
  output: {
    banner: jquery,
    file: 'res/index.js',
    format: 'iife',
    globals: {
      $: '$',
    },
  },
  plugins: [
    pug(),
    less({
      output: 'res/index.css',
    }),
  ],
};
