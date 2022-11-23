export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 122555
  }),
  actions: {
    increment () {
      this.count++
    },
    decrement () {
      this.count--
    },
    reset () {
      this.count = 0
    },
    increment2x () {
      this.count *= 2
    }
  }
})

// console.log(import.meta.hot)
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot))
}
