'use strict';

const SPEED = 250;

class Player extends Phaser.Sprite {
    constructor(game) {
        super(game, 25, 0, 'player', 1);
        game.add.existing(this);

        this.setupPhysics();
        this.setupControls();
    }

    setupControls() {
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    setupPhysics() {
        this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
        this.body.collideWorldBounds = true;
        this.body.setSize(20, 20, 6, 6);
        this.body.velocity.setTo(1, 1);
    }

    updateVelocity() {
        const { up, down, left, right } = this.cursors;
        const velocity = this.body.velocity;

        if (up.isDown) {
            velocity.y = -1 * SPEED;
        }

        if (down.isDown) {
            velocity.y = SPEED;
        }

        if (left.isDown) {
            velocity.x = -1 * SPEED;
        }

        if (right.isDown) {
            velocity.x = SPEED;
        }
    }
}
