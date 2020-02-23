import Position from './position.js';
export default class Snake {
    constructor() {
        this.head = new Position(0, 0);
        this.body = [JSON.parse(JSON.stringify(this.head))];
        console.log(this.body);
    }

    updateHead(dir) {
        let temp = JSON.parse(JSON.stringify(this.head));
        temp.x += dir.x;
        temp.y += dir.y;
        return temp;
    }

    grow(dir) {
        this.head = this.updateHead(dir);
        this.body.unshift(this.head);
        console.log(this.body);
    }

    move(dir) {
        this.head = this.updateHead(dir);
        this.body.unshift(this.head);
        this.body.pop();
        console.log(this.body);
    }
}