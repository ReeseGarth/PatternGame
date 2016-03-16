'use strict'

module.exports = function () {

	var draw = require('./draw')

	var canvas = document.getElementById('gameCanvas'),
		gameSection = document.getElementById('gameSection');

	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {

		var width = gameSection.offsetWidth,
			height = gameSection.offsetHeight;

		if (width > height) {
			canvas.width = height;
			canvas.height = height;
		} else {
			canvas.width = width;
			canvas.height = width;
		}

		draw(canvas.width, canvas.height);

	}

	resizeCanvas();

};