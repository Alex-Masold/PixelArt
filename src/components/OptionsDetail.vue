<template>
    <div class="options-detail">
        <slot></slot>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.options-detail {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
}
</style>
