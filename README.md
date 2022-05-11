# Nuxt 3 with Eslint and Tailwindcss

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Features

- [x] 🌊 [Tailwindcss v3](https://tailwindcss.com/)
- [x] 🍍 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [x] 🥸 [Mocking Service Worker (MSW)](https://mswjs.io/)
- [x] 📱 Mobile Detect Plugin
- [x] ✨ Eslint & Prettier
- [x] 🐕 Husky & Commitlint
- [x] 🔗 [Axios](https://axios-http.com/) setup complete in NuxtApp

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Locally preview production build:

```bash
yarn preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment) for more information.

## Setup Tutorials for other libraries

### [Eslint](https://eslint.org/) Setup

```bash
yarn add -D @nuxtjs/eslint-config-typescript eslint@latest eslint-plugin-nuxt@latest eslint-config-prettier eslint-plugin-prettier
```

Nuxt 3 built-in typescript is still cannot be detected by eslint, So...

```bash
yarn add -D typescript
```

`eslintrc.json` configuration

```json
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "@nuxtjs/eslint-config-typescript",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended"
  ]
}
```

### [Tailwindcss](https://tailwindcss.com/) Setup

Recommended extension Tailwind CSS IntelliSense and PostCSS Language Support. You can see the recommended list in `extension.json`

```bash
yarn add -D tailwindcss
npx tailwindcss init
```

Create `tailwind.css` file in assets/css folder

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`tailwind.config.js` configuration

```js
module.exports = {
  content: ['./components/**/*.vue', './layouts/**/*.vue', './pages/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

`nuxt.config.ts` configuration

```ts
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  css: ['~/assets/css/tailwind.css'],
})
```

### [Pinia](https://pinia.vuejs.org/) Setup 🍍

```bash
yarn add -D pinia @pinia/nuxt
```

`nuxt.config.ts` configuration

```ts
export default defineNuxtConfig({
  buildModules: [
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@pinia/nuxt',
  ],
})
```

`tsconfig.json` for typescript support

```json
{
  "compilerOptions": {
    "types": [
      // https://pinia.vuejs.org/
      "@pinia/nuxt"
    ]
  }
}
```

### [MSW](https://mswjs.io/) Setup

Simply follow the instruction and put the starting point into `plugins`

```bash
yarn add -D msw
```

### [Axios](https://axios-http.com/) Setup

```bash
yarn add -D axios
```

`api` folder structure is below

```
.
└── api
    ├── index.ts
    ├── user.ts
    ├── search.ts
    └── layout.modify.ts
```

- `index.ts` is the root file to access all apis
- Only `mocks/handlers.ts` can directly access individual api file to get the urls
- Please call `layout.modify.ts` by using `useAsync`. `layout.modify.ts` is the modification of current site layout from backend.
- And put api into useNuxtApp to be the context from plugins

### [Device](https://github.com/nuxt-community/device-module/blob/master/lib/plugin.js) Plugin Setup

This Plugin is alive because [@nuxt/device](https://github.com/nuxt-community/device-module) is not working by simple installation. Therefore I refer to its plugin.js to rewrite a simple context in `useNuxtApp` with `$isMobile`. Feel free to use it.

### [VueUse](https://vueuse.org/) Setup

Its composables are also auto-import to your project✨✨✨

```bash
yarn add -D @vueuse/nuxt
```

`nuxt.config.ts` configuration

```ts
export default defineNuxtConfig({
  buildModules: ['@vueuse/nuxt'],
  vueuse: {
    ssrHandlers: true,
  },
})
```
