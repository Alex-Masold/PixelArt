<template>
    <div class="gridRow">
        <GridCol v-for="gridCol in $props.cols"
            :key="gridCol.id"
            :color="$props.color"/>
    </div>
</template>

<script setup lang="ts">
import GridCol from './GridCol.vue';

const props = defineProps({
    cols: Array<any>, 
    color: String // OptionsBox строка цвета #ff0000, а в MainView и GridCol уже #f50000
 }); 

</script>

<style scoped>
.gridRow {
    display: flex;
}
</style>
