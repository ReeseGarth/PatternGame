'use strict'

module.exports = function(stage) {

	var draw = require('./drawSquares');

	function resizeGame() {

		draw(stage, true);

	}

	resizeGame();

};