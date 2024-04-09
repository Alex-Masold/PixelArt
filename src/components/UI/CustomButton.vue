<template>
    <button class="button">
        <slot></slot>
    </button>
</template>

<script setup lang="ts"></script>

<style scoped>
.button {
    background-color: #005cc8;
    border: none;
    border-radius: 5px;
    padding: 5px;
    color: #fff;
}
</style>
