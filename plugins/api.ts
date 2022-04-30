import api from '@/apis';

export default defineNuxtPlugin(() => {
  return {
    provide: {
      api,
    },
  };
});
