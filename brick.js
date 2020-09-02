import { collisionDetection } from './collisionDetection.js';

export default class Brick {
    constructor(game, position) {
        this.image = document.getElementById('brick');
        this.name = 'brick';
        this.game = game;
        this.position = position;
        this.width = 80;
        this.height = 25;
        this.markedForDeletion = false;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        if (collisionDetection(this.game.ball, this)) {
            this.markedForDeletion = true;
        }
    }
}