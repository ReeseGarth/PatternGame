'use strict'

module.exports = function () {

	var draw = require('./draw')

	var canvas = document.getElementById('gameCanvas');

	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {

		var width = window.innerWidth,
			height = window.innerHeight;

		if (width > height) {
			canvas.width = height - (height * 0.2);
			canvas.height = height - (height * 0.2);
		} else {
			canvas.width = width - (width * 0.2);
			canvas.height = width - (width * 0.2);
		}

		draw(canvas.width, canvas.height);

	}

	resizeCanvas();

};