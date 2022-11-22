<script lang="ts" setup>
// import { useCounterStore } from './stores/counterStore'

// const ww = process.env.NODE_ENV.trim.toLowerCase()
// const temp = (para) => {
//   console.log('aAAAA')
//   return para
// }
const counterStore = useCounterStore()

// const handleClick = () => {
//   console.log(counterStore.count)
//   console.log('YOYO')
// }
</script>

<template>
  <div>
    <p>dddeeee</p>
    <button
      class="w-full bg-blue-100 text-primary btn"
      @click="counterStore.increment2x"
    >
      +
    </button>
    {{ counterStore.count }}
    <button
      class="w-full bg-blue-100 text-primary btn"
      @click="counterStore.decrement"
    >
      -
    </button>
    <NuxtWelcome />
  </div>
</template>
