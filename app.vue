<script lang="ts" setup>
const handleClick = () => {
    console.log("YOYO");
};
</script>

<template>
    <div>
        <button
            class="w-full bg-blue-100 text-primary btn"
            @click="handleClick"
        >
            😛 YO
        </button>
        <NuxtWelcome />
    </div>
</template>
