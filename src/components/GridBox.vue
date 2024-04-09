<template>
    <div class="grid-box">
        <GridRow v-for=""/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import GridRow from './GridRow.vue';

const props = defineProps({
    rowLength: Number,
    colLength: Number
});

const gridRows = ref<object[]>();
</script>

<style scoped>
.grid-box {
    background-color: #333;
    border-radius: 8px;
}
</style>
