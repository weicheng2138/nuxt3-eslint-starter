# Nuxt 3 with Eslint and Tailwindcss

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Features

-   [x] 🌊 [Tailwindcss](https://tailwindcss.nuxt.dev/)
-   [x] 🍍 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
-   [x] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
-   [x] 🥸 [Mocking Service Worker (MSW)](https://mswjs.io/)
-   [x] 📱 Mobile Detect Plugin
-   [x] ✨ Eslint & Prettier
-   [x] 🐕 Husky & Commitlint
-   [x] 🔗 [Axios](https://axios-http.com/) setup complete in NuxtApp

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# pnpm
pnpm install
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

Checkout the [deployment documentation](https://nuxt.com/docs/getting-started/introduction) for more information.

## Setup Tutorials for other libraries

### [Eslint](https://github.com/nuxt/eslint-config) Setup with Typescript
```bash
yarn add -D @nuxtjs/eslint-config-typescript eslint
```

`.eslintrc` configuration

```json
{
  "extends": [
    "@nuxtjs/eslint-config-typescript"
  ]
}
```

Optional: We use eslint to format the code officially. There are settings that you may want to disable.
1. On macOS - Code > Preferences > Settings
2. Search `Prettier:Require Config` uncheck it in your workspace
```json
{
    "prettier.requireConfig": true,
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
}
```

### [Tailwindcss](https://tailwindcss.nuxt.dev/) Setup

Recommended extension Tailwind CSS IntelliSense and PostCSS Language Support. You can see the recommended list in `extension.json`

```bash
yarn add -D @nuxtjs/tailwindcss
```

#### Optional: Create `tailwind.css` file in assets/css folder

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### `nuxt.config.ts` configuration

```ts
export default defineNuxtConfig({
    tailwindcss: {
        cssPath: "~/assets/css/tailwind.css",
        configPath: "tailwind.config",
        // exposeConfig: false,
        // config: {},
        // injectPosition: 0,
        // viewer: true,
    },
    modules: ["@nuxtjs/tailwindcss"],
});
```

#### Create `tailwind.config.ts` and its configuration

```ts
import type { Config } from "tailwindcss";
// import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                primary: "#00FF00",
                // primary: defaultTheme.colors.green
            },
        },
    },
};
```

> Official setting of `defaultTheme.colors.green` for green is not working

### [Pinia](https://pinia.vuejs.org/) Setup 🍍

```bash
yarn add -D pinia @pinia/nuxt
```

`nuxt.config.ts` configuration

```ts
export default defineNuxtConfig({
    modules: ["@pinia/nuxt"],
});
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

-   `index.ts` is the root file to access all apis
-   Only `mocks/handlers.ts` can directly access individual api file to get the urls
-   Please call `layout.modify.ts` by using `useAsync`. `layout.modify.ts` is the modification of current site layout from backend.
-   And put api into useNuxtApp to be the context from plugins

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
    modules: ["@vueuse/nuxt", "@pinia/nuxt"],
    vueuse: {
        ssrHandlers: true,
    },
});
```
