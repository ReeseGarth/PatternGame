'use strict'

module.exports = function() {

	var stage = new createjs.Stage("gameCanvas");

	var squareOne = new createjs.Shape(),
		squareTwo = new createjs.Shape(),
		squareThree = new createjs.Shape(),
		squareFour = new createjs.Shape();

	// rectangle params - x, y, width, height
	squareOne.graphics.beginFill("red").drawRect(100, 100, 100, 100);
	stage.addChild(squareOne);

	squareTwo.graphics.beginFill("green").drawRect(300, 100, 100, 100);
	stage.addChild(squareTwo);

	squareThree.graphics.beginFill("blue").drawRect(100, 300, 100, 100);
	stage.addChild(squareThree);

	squareFour.graphics.beginFill("yellow").drawRect(300, 300, 100, 100);
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