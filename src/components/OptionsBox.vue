<template>
    <div class="options-box">
        <OptionsDetail>
            <CustomSlider v-model="gridWidth"> Grid Widht </CustomSlider>
            <CustomSlider v-model="gridHeight"> Grid Height </CustomSlider>
        </OptionsDetail>

        <OptionsDetail>
            <CustomButton @click="createGrid">Create Grid</CustomButton>
            <CustomButton>Clear Grid</CustomButton>
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

const emit = defineEmits(['createGrid', 'clearGrid', 'colorChange', 'paint']);

function createGrid() {
    emit('createGrid', gridWidth.value, gridHeight.value);
}

function colorChange() {
    emit('colorChange', colorString.value);
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
