'use strict'

module.exports = function (stage) {

	var squareNum = require('./randomIntFromInterval'),
	createjs = require('createjs-collection');

	createjs.Ticker.addEventListener("tick", tick);

	var update = true;

	(function fadeSquare(i) {          
	   	setTimeout(function () {   
	   		var square = stage.getChildAt(squareNum(0, 3));

			createjs.Tween.get(square).wait(1000).play(
				createjs.Tween.get(square,{paused:true})
				.to({alpha:0.5}, 1500)
				.to({alpha:1}, 1500)
			);

	    	if (--i) fadeSquare(i); 
	   	}, 3000)
	})(4);  

	function tick(event) {

		update = false; 
		stage.update(event);

	};

}