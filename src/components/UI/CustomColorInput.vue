<template>
    <input class="color-input" type="color" v-model="modelValue">
</template>

<script setup lang="ts">
const modelValue = defineModel<string>();
</script>

<style scoped>
.color-input{
    appearance: none;
    background-color: transparent;
    border: none;
    border-radius: 5px;
    cursor: pointer;    
}
</style>