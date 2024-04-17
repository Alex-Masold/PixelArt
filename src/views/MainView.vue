<template>
    <div class="wrapper">
        <OptionsBox @create-grid="createGrid" @color-change="colorChange" @clear-grid="clearGrid"/>

        <div class="grid-box">
            <GridRow
                v-for="gridRow in gridRows"
                :key="gridRow.id"
                :cols="gridRow.grisCol"
                :color="colorString" />
        </div>
    </div>
</template>

<script setup lang="ts">
import GridRow from '@/components/GridRow.vue';
import OptionsBox from '@/components/OptionsBox.vue';
import { provide, ref } from 'vue';

const isDraw = ref<boolean>(false);

provide('isDraw', { isDraw, isDrawSwitch });

function isDrawSwitch() {
    isDraw.value = !isDraw.value;
}

const isPaint = ref<boolean>(true);

const gridRows = ref<gridRow[]>([]);

const colorString = ref<string>('#ffffff');

class gridCol {
    id: number;

    constructor(_id: number) {
        this.id = _id;
    }
}
class gridRow {
    id: number; 
    length: number;
    grisCol: Array<gridCol> = [];

    constructor(_id: number, _length: number) {
        this.id = _id;
        this.length = _length;
        for (let index = 0; index < _length; index++) {
            this.grisCol.push(new gridCol(index));
        }
    }
}

function createGrid(_rowLength: number, _colLength: number) {
    clearGrid()
    for (let index = 0; index < _rowLength; index++) {
        gridRows.value.push(new gridRow(index, _colLength));
    }
} // при изменении grid gridCols не обновляются

function colorChange(_colorString: string) {
    colorString.value = _colorString;
}

function clearGrid() {
    gridRows.value = [];
}
</script>

<style scoped>
.wrapper {
    display: flex;
    flex-direction: column;
    gap: 1em;
}
.grid-box {
    background-color: #333;
    border-radius: 8px;
    padding: 1em;
}
</style>
