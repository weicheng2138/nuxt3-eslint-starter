# Nuxt 3 with Eslint and Tailwindcss

Look at the [nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Features

- [x] 🌊 [Tailwindcss](https://tailwindcss.nuxt.dev/)
- [x] 🍍 [State & Store Management (Pinia)](https://pinia.vuejs.org/)
- [x] 📦 [Vue Composition Collection (Vueuse)](https://vueuse.org/)
- [x] 🥸 [Mocking Service Worker (MSW)](https://mswjs.io/)
- [x] 📱 Mobile Detect module [@nuxtjs/device](https://www.npmjs.com/package/@nuxtjs/device/v/3.0.0?activeTab=readme)
- [x] ✨ Eslint & lint-staged
- [x] 🐕 Husky & cz
- [x] 🔗 [Axios v1](https://axios-http.com/) setup complete in NuxtApp

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# pnpm (Not recommended right now)
# Even with `--shamefully-hoist`, it still not work properly
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

When you are testing and adding these modules in your project, remember to run `yarn dev` during your testing process. Some of auto-import feature need to be generated automatically into `.nuxt`.

Normally, nuxt will generate `app.vue` to be the entry point of your app. However, if you create pages directory, `app.vue` will be useless. Therefore, our entry page is `pages/index.vue`.

### [Eslint](https://github.com/nuxt/eslint-config) Setup with Typescript

```bash
yarn add -D @nuxtjs/eslint-config-typescript eslint
```

`.eslintrc` configuration

```json
{
  "extends": ["@nuxtjs/eslint-config-typescript"]
}
```

Optional: We use eslint to format the code officially. There are some settings that you may want to disable.

1. On macOS - Code > Preferences > Settings
2. Search `Prettier:Require Config` uncheck it in your workspace

```json
{
  "prettier.requireConfig": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
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
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    // exposeConfig: false,
    // config: {},
    // injectPosition: 0,
    // viewer: true,
  },
  modules: ['@nuxtjs/tailwindcss'],
})
```

#### Create `tailwind.config.ts` and its configuration

```ts
import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: '#00FF00',
        // primary: defaultTheme.colors.green
      },
    },
  },
}
```

> Official setting of `defaultTheme.colors.green` for green is not working

### [Pinia](https://pinia.vuejs.org/ssr/nuxt.html) Setup 🍍

```bash
yarn add @pinia/nuxt
```

`nuxt.config.ts` configuration

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  // make user stores directory to be able to auto-import without import anything
  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
})
```

### [MSW](https://mswjs.io/) Setup

Simply follow the instruction and put the starting point into `plugins`

```bash
yarn add -D msw
```

```ts
// msw.client.ts
import { worker } from '@/mocks/browser'

export default defineNuxtPlugin(() => {
  if (process.dev) {
    worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
})
```

### [Axios](https://axios-http.com/) Setup

You have to set interceptors for each purpose of api in apis directory. Then all these file will get imported into `plugins/apis.ts`.

```bash
yarn add -D axios
```

Use it as a plugin. You can use it like below.

```ts
const { $api } = useNuxtApp()
const handleClick = async () => {
  const data = await $api.mountain.getMountains()
}
```

### [Device](https://www.npmjs.com/package/@nuxtjs/device/v/3.0.0?activeTab=readme) Setup

Previous version is using custom plugin to find out user-agent. However, `@nuxtjs/device` had already finished the version 3 of the module. Therefore, we use it with pleasure.

```bash
yarn add -D @nuxtjs/device
```

```ts
export default defineNuxtConfig({
  modules: ['@nuxtjs/device'],
})
```

#### Composable

```html
<script setup>
  const { isMobile } = useDevice()
</script>
```

#### Switch a view (Cannot be recognized by ts(2339))

> Property '$device' does not exist

It works fine with the function of it.

```html
<div>
  <div v-if="$device.isDesktop">Desktop</div>
  <div v-else>Mobile</div>
</div>
```

Official example

```html
<script lang="ts" setup>
  const device = useDevice()
</script>

<template>
  <div>
    <div v-if="device.isMobile">Mobile</div>
    <div v-else>Not Mobile</div>
  </div>
</template>
```

#### Change a layout dynamically (`index.vue`)

```html
<script lang="ts" setup>
  const device = useDevice()
  definePageMeta({
    layout: false,
  })
</script>

<template>
  <div>
    <NuxtLayout :name="device.isMobile ? 'mobile':'default'">
      <h1>Home Page</h1>
      The rest of the page
    </NuxtLayout>
  </div>
</template>
```

### [VueUse](https://vueuse.org/) Setup

Its composables are also auto-import to your project ✨✨✨

```bash
yarn add -D @vueuse/nuxt @vueuse/core
```

`nuxt.config.ts` configuration

```ts
export default defineNuxtConfig({
  modules: ['@vueuse/nuxt'],
})
```
