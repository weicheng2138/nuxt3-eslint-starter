<script lang="ts" setup>
const device = useDevice()
definePageMeta({
  layout: false
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
