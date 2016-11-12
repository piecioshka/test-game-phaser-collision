'use strict';

class CityState extends Phaser.Sprite {
    preload() {
        this.load.image('player', 'images/player.png');
        // this.load.image('sample-image', 'images/player.png');
        this.load.spritesheet('sample-image', 'images/sample-image.png', 32, 32);
        this.load.tilemap('city', 'maps/city.json', null, Phaser.Tilemap.TILED_JSON);
    }

    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.setupWorld();
        this.game.player = new Player(this.game);
    }

    setupWorld() {
        this.map = this.add.tilemap('city');
        this.map.addTilesetImage('sample-image');

        // this.map.setCollisionByExclusion([0]);
        this.map.setCollision([1]);

        this.layer = this.map.createLayer('city-layer');
        this.layer.resizeWorld();
        this.layer.debug = true;
    }

    update() {
        this.game.player.body.velocity.setTo(0, 0);
        this.game.player.updateVelocity();
        this.game.physics.arcade.collide(this.game.player, this.layer, (player, tile) => {
            player.body.velocity.setTo(0, 0);
        });
    }

    render() {
        // this.game.debug.bodyInfo(this.game.player, 25, 290);
        this.game.debug.body(this.game.player);
    }
}