<template>
    <div class="options-box">
        <OptionsDetail>
            <CustomSlider v-model="gridWidth"> Grid Widht </CustomSlider>
            <CustomSlider v-model="gridHeight"> Grid Height </CustomSlider>
        </OptionsDetail>

        <OptionsDetail>
            <CustomButton>Create Grid</CustomButton>
            <CustomButton>Clear Grid</CustomButton>
            <CustomColorInput v-model="colorString" />
            <CustomButton>Earase</CustomButton>
            <CustomButton>Paint</CustomButton>
        </OptionsDetail>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import OptionsDetail from './OptionsDetail.vue';
import CustomSlider from './UI/CustomSlider.vue';
import CustomButton from './UI/CustomButton.vue';
import CustomColorInput from './UI/CustomColorInput.vue';

const gridWidth = ref(0);
const gridHeight = ref(0);

const colorString = ref('#000000');
</script>

<style scoped>
.options-box {
    background-color: #333;
    width: 100vh;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 20%;
    left: 50%;
    padding: 2em;
    border-radius: 1em;
}
</style>
