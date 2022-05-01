<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
definePageMeta({
  layout: 'custom',
});
const { $api } = useNuxtApp();
const { x, y } = useMouse();
onMounted(async () => {
  await $api.user.postUserLogin('1234');
});

const counterStore = useCounterStore();
</script>

<template>
  <div class="flex flex-col">
    <div>{{ counterStore.count }}</div>
    <button @click="counterStore.increment">+</button>
    <button @click="counterStore.decrement">-</button>
    <NuxtLink to="/">HOME</NuxtLink>
    {{ $isMobile() }}
    <div>pos: {{ x }}, {{ y }}</div>
  </div>
</template>
