'use strict'

// TODO: resize or reposition shapes based on media size

module.exports = function(canvasWidth, canvasHeight) {

	var stage = new createjs.Stage("gameCanvas");

	var squareOne = new createjs.Shape(),
		squareTwo = new createjs.Shape(),
		squareThree = new createjs.Shape(),
		squareFour = new createjs.Shape();

	// the dimensions of the squares
	var squareWidth = canvasWidth * 0.3,
		squareHeight = canvasHeight * 0.3;

	// starting position (square one) and offsets (all other squares)

	var xOffset = 100,
		yOffset = 100;

	// spacing between squares
	var spacing = 10;

	// rectangle params - x, y, width, height
	squareOne.graphics.beginFill("red").drawRect(xOffset, yOffset, squareWidth, squareHeight);
	stage.addChild(squareOne);

	squareTwo.graphics.beginFill("green").drawRect(0, yOffset, squareWidth, squareHeight);
	squareTwo.x = xOffset + squareWidth + spacing; // square 2 positioning
	stage.addChild(squareTwo);

	squareThree.graphics.beginFill("blue").drawRect(xOffset, 0, squareWidth, squareHeight);
	squareThree.y = yOffset + squareHeight + spacing; // square 3 positioning
	stage.addChild(squareThree);

	squareFour.graphics.beginFill("yellow").drawRect(0, 0, squareWidth, squareHeight);
	squareFour.x = xOffset + squareWidth + spacing; // square 4 positioning
	squareFour.y = yOffset + squareHeight + spacing; // square 4 positioning
	stage.addChild(squareFour);
	

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

	stage.update(); // can't be used when using tween
			
};