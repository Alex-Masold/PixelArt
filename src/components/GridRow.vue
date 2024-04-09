<template>
    <div class="gridRow"></div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: Number,
    length: Number
});
</script>

<style scoped>
.gridRow {
    display: flex;
}
</style>
