<script lang="ts" setup>
// const ww = process.env.NODE_ENV.trim.toLowerCase()
// const temp = (para) => {
//   console.log('aAAAA')
//   return para
// }
const handleClick = () => {
  console.log('YOYO')
}
</script>

<template>
  <div>
    <button
      class="w-full bg-blue-100 text-primary btn"
      @click="handleClick"
    >
      😛 YO
    </button>
    <p>PPP</p>
    <NuxtWelcome />
  </div>
</template>
