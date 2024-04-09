<template>
    <div class="GridCol"></div>
</template>

<script setup lang="ts">
    const props = defineProps({
        id: Number,
        color: String
    })
</script>

<style scoped>
.gridCol {
    height: 1em;
    width: 1em;
    border: 1px solid #ddd;
}
</style>
