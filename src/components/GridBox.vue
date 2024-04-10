<template>
    <div class="grid-box">
        <GridRow v-for="gridRow in gridRows"
            :key="gridRow.id"
            :length="gridRow.length"/>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import GridRow from './GridRow.vue';

const props = defineProps({
    rowLength: Number,
    colLength: Number,
    colorString: String
});

class gridRowClass {
    id: number;
    length: number | undefined;
    // надо ли сдесь добавлять массив gridCol (связывание)

    constructor(id: number, length: number) {
        this.id = id;
        this.length = length;
    }
};

const gridRows = ref<gridRowClass[]>([]);

watch(props.rowLength, () => {
    for (let index = 0; index < props.rowLength; index++) {
        gridRows.value.push(new gridRowClass(index, props.colLength));
    };
});
</script>

<style scoped>
.grid-box {
    background-color: #333;
    border-radius: 8px;
    padding: 1em;
}
</style>
