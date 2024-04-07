<template>
    <div class="wrapper">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
    .wrapper{
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    gap: 10px;
}
</style>