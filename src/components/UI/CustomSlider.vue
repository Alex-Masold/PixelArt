<template>
    <div class="slider">
        <label for="input-range">
            <slot></slot>
        </label>
        <input id="input-range" type="range"
            v-model="modelValue" 
            min="1"
            max="35">
        <span for="input-range"> {{ modelValue }}</span>
    </div>
</template>

<script setup lang="ts">
    const modelValue = defineModel<number>();
</script>

<style scoped>
    .slider{
        display: flex;
        gap: 0.5em;
    }
    span{
    position: relative;
    font-size: 22px;
    bottom: -1px;
}
</style>