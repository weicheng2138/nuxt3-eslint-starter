<script lang="ts" setup>
const device = useDevice()
definePageMeta({
  layout: false
})

</script>

<template>
  <div>
    <NuxtLayout :name="device.isMobile ? 'mobile':'default'">
      <WelcomeComponent />
    </NuxtLayout>
  </div>
</template>
