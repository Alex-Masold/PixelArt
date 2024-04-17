<template>
    <div class="options-box">
        <OptionsDetail>
            <CustomSlider v-model="gridWidth"> Grid Widht </CustomSlider>
            <CustomSlider v-model="gridHeight"> Grid Height </CustomSlider>
        </OptionsDetail>

        <OptionsDetail>
            <CustomButton @click="createGrid">Create Grid</CustomButton>
            <CustomButton @click="clearGrid">Clear Grid</CustomButton>
            <CustomColorInput @update:model-value="colorChange" v-model="colorString" />
            <VSwitch color="primary" label="paint" v-model="modelValue"></VSwitch>
        </OptionsDetail>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VSwitch } from 'vuetify/components';
import OptionsDetail from './OptionsDetail.vue';
import CustomSlider from './UI/CustomSlider.vue';
import CustomButton from './UI/CustomButton.vue';
import CustomColorInput from './UI/CustomColorInput.vue';

const gridWidth = ref(0);
const gridHeight = ref(0);

const colorString = ref('#000000');

const modelValue = defineModel<boolean>();

const emit = defineEmits(['create-grid', 'clear-grid', 'color-change', 'paint']);

function createGrid() {
    emit('create-grid', gridWidth.value, gridHeight.value);
}

function colorChange() {
    emit('color-change', colorString.value);
}

function clearGrid() {
    emit('clear-grid');
}
</script>

<style scoped>
.options-box {
    background-color: #333;
    width: 100vh;
    padding: 2em;
    border-radius: 1em;
}
</style>
