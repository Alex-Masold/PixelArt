<template>
    <div class="gridCol"
        @click="colorChange"> </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

    const props = defineProps({
        color: String
    })
    const colorString = ref<string>('')
    function colorChange() {
        colorString.value = props.color;
    }
</script>

<style scoped>
.gridCol {
    height: 1em;
    width: 1em;
    border: 1px solid #ddd;
    background-color: v-bind("colorString");
}
</style>
