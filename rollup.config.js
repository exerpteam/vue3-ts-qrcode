import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default [
  {
    input: 'src/index.js',
    output: [
      {
        format: 'esm',
        file: 'dist/library.mjs'
      },
      {
        format: 'cjs',
        file: 'dist/library.js'
      }
    ],
    plugins: [
      vue({ css: false }),
      peerDepsExternal(),
      typescript(),
      postcss({
        extract: true,
        plugins: [
          autoprefixer(),
          tailwind()
        ]
      }),
    ]
  }
]