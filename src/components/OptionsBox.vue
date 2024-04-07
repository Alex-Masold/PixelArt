<template>
	<div>
        <OptionsDetail>
            <CustomSlider v-model="gridWidth">
                Grid Widht
            </CustomSlider>
            <CustomSlider v-model="gridHeight">
                Grid Height
            </CustomSlider>
        </OptionsDetail>

        <OptionsDetail>
            <CustomButton>Create Grid</CustomButton>
            <CustomButton>Clear Grid</CustomButton>
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

const gridWidth = ref(0);
const gridHeight = ref(0);

</script>

<style scoped>

</style>