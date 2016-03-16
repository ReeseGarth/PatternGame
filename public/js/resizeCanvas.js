'use strict'

module.exports = function () {

	var draw = require('./draw')

	var canvas = document.getElementById('gameCanvas');

	window.addEventListener('resize', resizeCanvas, false);

	function resizeCanvas() {

		canvas.width = window.innerWidth - (window.innerWidth * 0.2);
		canvas.height = window.innerWidth - (window.innerHeight * 0.4);

		draw();
	}

	resizeCanvas();

};