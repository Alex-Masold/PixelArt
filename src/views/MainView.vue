<template>
    <div class="wrapper">
        <OptionsBox />

        <GridBox :row-length="10" :col-length="10" />
    </div>
</template>

<script setup>
import GridBox from '@/components/GridBox.vue';
import OptionsBox from '@/components/OptionsBox.vue';
</script>

<style scoped>
.wrapper {
    width: 80vmin;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 20%;
    left: 50%;
    padding: 40px 20px;
    border-radius: 8px;
}
</style>
