<template>
    <div class="wrapper"> 
        <OptionsBox/>
    </div>
</template>

<script setup>
    import OptionsBox from '@/components/OptionsBox.vue';
</script>

<style scoped>
    .wrapper{
    background-color: #333;
    width: 80vmin;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    padding: 40px 20px;
    border-radius: 8px;
}
</style>