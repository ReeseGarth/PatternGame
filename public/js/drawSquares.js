'use strict'

module.exports = function(stage, resized) {

	var createjs = require('createjs-collection');

	var squareWidth, squareHeight, xOffset, yOffset, spacing;

	setStageSize();
	getSquareDimensions();
	getOffsets();

	for (var i = 0; i < 4; i++) {
		if (!resized)
			addSquare();
		else
			redrawSquare(i);
	}

	stage.update();

	function setStageSize() {

		var gameSection = document.getElementById('gameSection');

		// resize canvas to be responsive with section element
		var width = gameSection.offsetWidth,
			height = gameSection.offsetHeight;

		// this ensures the squares are always squares and fit within the screen
		if (width > height) {
			stage.canvas.width = height;
			stage.canvas.height = height;
		} else {
			stage.canvas.width = width;
			stage.canvas.height = width;
		}

	};

	function getSquareDimensions() {

		// square dimensions
		squareWidth = stage.canvas.width * 0.4;
		squareHeight = stage.canvas.height * 0.4;

	};

	function getOffsets() {

		// x and y offsets from center for square positioning
		xOffset = (stage.canvas.width / 2) - squareWidth - 5;
		yOffset = (stage.canvas.height / 2) - squareHeight - 5;

		// spacing between the squares
		spacing = 10;

	};

	function addSquare() {

		var square = new createjs.Shape();
		square.graphics.beginFill(getSquareColor(square.id)).drawRect(0, 0, squareWidth, squareHeight);
		square.shadow = new createjs.Shadow("#000", 5, 5, 10);
		square.x = getXPosition(square.id);
		square.y = getYPosition(square.id);
		stage.addChild(square);

	};

	function redrawSquare(squareIndex) {

		var square = stage.getChildAt(squareIndex);
		square.graphics.clear();
		square.graphics.beginFill(getSquareColor(square.id)).drawRect(0, 0, squareWidth, squareHeight);
		square.shadow = new createjs.Shadow("#000", 5, 5, 10);
		square.x = getXPosition(square.id);
		square.y = getYPosition(square.id);

	};

	function getSquareColor(squareId) {

		if (squareId === 1) 
			return "red";
		else if (squareId === 2) 
			return "green";
		else if (squareId === 3)
			return "blue";
		else
			return "yellow";

	}

	function getXPosition(squareId) {

		if (squareId === 1 || squareId === 3) 
			return xOffset;
		else 
			return xOffset + squareWidth + spacing;

	};

	function getYPosition(squareId) {

		if (squareId === 1 || squareId === 2) 
			return yOffset;
		else 
			return yOffset + squareHeight + spacing;

	};

	/*
		Draw Function Uses:
		- drawRect
		- apply shadow
		- add the rectangle to the canvas

	/* 
		-Changing x moves the shape horizonatally
		-Changing y moves the shape vertically
		-Changing alpha will fade the shape in and out
	*/

	/*
		createjs.Tween.get(circle, { loop: true })
			.to({ x: 400 }, 1000, createjs.Ease.getPowInOut(4))
			.to({ alpha: 0, y: 175 }, 500, createjs.Ease.getPowInOut(2))
			.to({ alpha: 0, y: 225 }, 100)
			.to({ alpha: 1, y: 200 }, 500, createjs.Ease.getPowInOut(2))
			.to({ x: 100 }, 800, createjs.Ease.getPowInOut(2));

		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener("tick", stage);
	*/

};