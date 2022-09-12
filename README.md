# Vue 3 + Typescript + Vite + Storybook + Tailwind

This template should help get you started developing with Vue 3, Typescript, Storybook and Tailwind in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## How to Start
Once you cloned the repo, you can start to create your components using [Storybook](https://storybook.js.org/docs/vue/get-started/introduction) methods.
[Tailwind](https://tailwindcss.com/docs/installation) is here to plug design tokens, use utility class and give a css theme easily.

To start storybook, run `npm run storybook`

## How to adapt your design tokens

Design tokens are data that reprents your design decision in your design system. Tailwind can use them once imported.
You can manually copy-paste your tokens as a JSON format in your project (in the tokens directory) or import them using javascript.
Once you have them, you can use this [tailwind guide](https://tailwindcss.com/docs/configuration) to fuse them with tailwind's utility classes !

## How to publish

Once your project is ready, export all the components you want to export in src/components/components.ts. Same for the Directives in src/directives/directives.ts 
Generate your dist folder using `npm run rollup`.
Then publish your repo on npm following this guide : [Publish your repo on npm](https://zellwk.com/blog/publish-to-npm/)

## Use your new library in another project

install your npm package in your new vue3 project.
`import yourProject from 'yourProject';
import "../node_modules/yourProject/dist/library.css"
createApp(App).use(yourProject).mount('#app')`
If it's a typescript project, don't forget to add the path of your modules in compilerOptions of your tsconfig.json
### Ressources used to build this boiledplate
 - https://tailwindcss.com/docs/configuration
 - https://storybook.js.org/docs/vue/get-started/introduction
 - https://blog.logrocket.com/building-vue-3-component-library/
 - https://zellwk.com/blog/publish-to-npm/
 - https://github.com/ezolenko/rollup-plugin-typescript2
