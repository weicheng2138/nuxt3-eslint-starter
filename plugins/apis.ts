import { getMountains } from '@/apis/mountain.api'

export default defineNuxtPlugin(() => {
  const api = {
    mountain: { getMountains }
  }
  return {
    provide: {
      api
    }
  }
})
