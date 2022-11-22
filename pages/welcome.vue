<script lang="ts" setup>
// You might choose this based on an API call or logged-in status
definePageMeta({
  layout: 'mobile'
})

const counterStore = useCounterStore()
const { x, y } = useMouse()
const device = useDevice()

const handleClick = () => {
  console.log(useDevice().isWindows)

  console.log('YOYO')
}

</script>

<template>
  <div>
    <h1>Welcome page</h1>
    <div>
      <p>{{ x }} - {{ y }}</p>
      <button
        class="w-full bg-blue-100 text-primary btn"
        @click="handleClick"
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
      <div v-if="device.isMobile">
        Mobile
      </div>
      <div v-else>
        Not Mobile
      </div>
      <NuxtWelcome />
    </div>
  </div>
</template>
