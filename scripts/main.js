'use strict';

const game = new Game(320, 320, Phaser.CANVAS, 'game');

game.state.add('CityState', CityState);
game.state.start('CityState');

game.state.onStateChange.add((newState) => {
    console.debug('State was changed:', newState);
});
