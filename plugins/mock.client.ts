import { worker } from '@/mocks/browser'

export default defineNuxtPlugin(() => {
  if (process.dev) {
    worker.start({
      onUnhandledRequest: 'bypass',
    })
  }
})
