export default class Position {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    isEqual(pos) {
        return (this.x == pos.x && this.y == pos.y);
    }
}