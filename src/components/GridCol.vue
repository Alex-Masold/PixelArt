<template>
    <div class="gridCol" ondragstart="return false;"
        @click="colorChangeClick"
        @mousedown="isDrawSwitch"
        @mousemove="colorChangeMove"
        @mouseup="isDrawSwitch"> </div>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue';
    const props = defineProps({
        color: String
    })

    const { isDraw, isDrawSwitch } = inject('isDraw');

    const colorString = ref<string>('') // OptionsBox строка цвета #ff0000, а в MainView и GridCol уже #f50000
    function colorChangeMove() {
        if (isDraw.value === true){
            colorString.value = props.color;
        }
    }   
    function colorChangeClick() {
        colorString.value = props.color;
    }
</script>

<style scoped>
.gridCol {
    height: 2em;
    width: 2em;
    border: 1px solid #ddd;
    background-color: v-bind("colorString");
}
</style>
