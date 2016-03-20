module.exports = function() {

	var createjs = require('createjs-collection');

	var canvas, stage;
		
	canvas = document.getElementById('gameCanvas');
	stage = new createjs.Stage(canvas);

	createjs.Touch.enable(stage);

	stage.enableMouseOver(10);
	stage.mouseMoveOutside = true;

	return stage;

};