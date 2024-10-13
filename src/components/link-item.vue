<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    to: {
        type: String,
        required: true
    }
 });

</script>

<template>
<RouterLink class="bg-green-700 rounded-xl text-white px-2 py-1"
:to="{name:to}">
    <slot></slot>
</RouterLink>
</template>



<style lang="scss" scoped>

</style>