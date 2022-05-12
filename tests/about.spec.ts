import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { setup, $fetch, isDev } from '@nuxt/test-utils'

describe('SSR About Page', async () => {
  await setup({
    rootDir: fileURLToPath(new URL('..', import.meta.url)),
    server: true,
  })
  it('Renders Title of  Get Started', async () => {
    expect(await $fetch('/')).toMatch('Get Started')
  })
  if (isDev()) {
    it('[dev] ensure vite client script is added', async () => {
      expect(await $fetch('/')).toMatch('/_nuxt/@vite/client"')
    })
  }
  it('go go go', () => {
    expect(1).toBe(1)
  })
})
