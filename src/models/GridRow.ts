export class gridRow {
    id: number;
    length: number;
    // надо ли сдесь добавлять массив gridCol (связывание)

    constructor(id: number, length: number) {
        this.id = id;
        this.length = length;
    }
}