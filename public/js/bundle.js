(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}],2:[function(require,module,exports){
(function() {

	'use strict'

	var resize = require('./resizeCanvas');

	resize();

})();
},{"./resizeCanvas":3}],3:[function(require,module,exports){
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
},{"./draw":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvZHJhdy5qcyIsInB1YmxpYy9qcy9tYWluLmpzIiwicHVibGljL2pzL3Jlc2l6ZUNhbnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xyXG5cclxuLy8gVE9ETzogcmVzaXplIG9yIHJlcG9zaXRpb24gc2hhcGVzIGJhc2VkIG9uIG1lZGlhIHNpemVcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oY2FudmFzV2lkdGgsIGNhbnZhc0hlaWdodCkge1xyXG5cclxuXHR2YXIgc3RhZ2UgPSBuZXcgY3JlYXRlanMuU3RhZ2UoXCJnYW1lQ2FudmFzXCIpO1xyXG5cclxuXHR2YXIgc3F1YXJlT25lID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCksXHJcblx0XHRzcXVhcmVUd28gPSBuZXcgY3JlYXRlanMuU2hhcGUoKSxcclxuXHRcdHNxdWFyZVRocmVlID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCksXHJcblx0XHRzcXVhcmVGb3VyID0gbmV3IGNyZWF0ZWpzLlNoYXBlKCk7XHJcblxyXG5cdC8vIHRoZSBkaW1lbnNpb25zIG9mIHRoZSBzcXVhcmVzXHJcblx0dmFyIHNxdWFyZVdpZHRoID0gY2FudmFzV2lkdGggKiAwLjMsXHJcblx0XHRzcXVhcmVIZWlnaHQgPSBjYW52YXNIZWlnaHQgKiAwLjM7XHJcblxyXG5cdC8vIHN0YXJ0aW5nIHBvc2l0aW9uIChzcXVhcmUgb25lKSBhbmQgb2Zmc2V0cyAoYWxsIG90aGVyIHNxdWFyZXMpXHJcblxyXG5cdHZhciB4T2Zmc2V0ID0gMTAwLFxyXG5cdFx0eU9mZnNldCA9IDEwMDtcclxuXHJcblx0Ly8gc3BhY2luZyBiZXR3ZWVuIHNxdWFyZXNcclxuXHR2YXIgc3BhY2luZyA9IDEwO1xyXG5cclxuXHQvLyByZWN0YW5nbGUgcGFyYW1zIC0geCwgeSwgd2lkdGgsIGhlaWdodFxyXG5cdHNxdWFyZU9uZS5ncmFwaGljcy5iZWdpbkZpbGwoXCJyZWRcIikuZHJhd1JlY3QoeE9mZnNldCwgeU9mZnNldCwgc3F1YXJlV2lkdGgsIHNxdWFyZUhlaWdodCk7XHJcblx0c3RhZ2UuYWRkQ2hpbGQoc3F1YXJlT25lKTtcclxuXHJcblx0c3F1YXJlVHdvLmdyYXBoaWNzLmJlZ2luRmlsbChcImdyZWVuXCIpLmRyYXdSZWN0KDAsIHlPZmZzZXQsIHNxdWFyZVdpZHRoLCBzcXVhcmVIZWlnaHQpO1xyXG5cdHNxdWFyZVR3by54ID0geE9mZnNldCArIHNxdWFyZVdpZHRoICsgc3BhY2luZzsgLy8gc3F1YXJlIDIgcG9zaXRpb25pbmdcclxuXHRzdGFnZS5hZGRDaGlsZChzcXVhcmVUd28pO1xyXG5cclxuXHRzcXVhcmVUaHJlZS5ncmFwaGljcy5iZWdpbkZpbGwoXCJibHVlXCIpLmRyYXdSZWN0KHhPZmZzZXQsIDAsIHNxdWFyZVdpZHRoLCBzcXVhcmVIZWlnaHQpO1xyXG5cdHNxdWFyZVRocmVlLnkgPSB5T2Zmc2V0ICsgc3F1YXJlSGVpZ2h0ICsgc3BhY2luZzsgLy8gc3F1YXJlIDMgcG9zaXRpb25pbmdcclxuXHRzdGFnZS5hZGRDaGlsZChzcXVhcmVUaHJlZSk7XHJcblxyXG5cdHNxdWFyZUZvdXIuZ3JhcGhpY3MuYmVnaW5GaWxsKFwieWVsbG93XCIpLmRyYXdSZWN0KDAsIDAsIHNxdWFyZVdpZHRoLCBzcXVhcmVIZWlnaHQpO1xyXG5cdHNxdWFyZUZvdXIueCA9IHhPZmZzZXQgKyBzcXVhcmVXaWR0aCArIHNwYWNpbmc7IC8vIHNxdWFyZSA0IHBvc2l0aW9uaW5nXHJcblx0c3F1YXJlRm91ci55ID0geU9mZnNldCArIHNxdWFyZUhlaWdodCArIHNwYWNpbmc7IC8vIHNxdWFyZSA0IHBvc2l0aW9uaW5nXHJcblx0c3RhZ2UuYWRkQ2hpbGQoc3F1YXJlRm91cik7XHJcblx0XHJcblxyXG5cdC8qIFxyXG5cdFx0LUNoYW5naW5nIHggbW92ZXMgdGhlIHNoYXBlIGhvcml6b25hdGFsbHlcclxuXHRcdC1DaGFuZ2luZyB5IG1vdmVzIHRoZSBzaGFwZSB2ZXJ0aWNhbGx5XHJcblx0XHQtQ2hhbmdpbmcgYWxwaGEgd2lsbCBmYWRlIHRoZSBzaGFwZSBpbiBhbmQgb3V0XHJcblx0Ki9cclxuXHJcblx0LypcclxuXHRcdGNyZWF0ZWpzLlR3ZWVuLmdldChjaXJjbGUsIHsgbG9vcDogdHJ1ZSB9KVxyXG5cdFx0XHQudG8oeyB4OiA0MDAgfSwgMTAwMCwgY3JlYXRlanMuRWFzZS5nZXRQb3dJbk91dCg0KSlcclxuXHRcdFx0LnRvKHsgYWxwaGE6IDAsIHk6IDE3NSB9LCA1MDAsIGNyZWF0ZWpzLkVhc2UuZ2V0UG93SW5PdXQoMikpXHJcblx0XHRcdC50byh7IGFscGhhOiAwLCB5OiAyMjUgfSwgMTAwKVxyXG5cdFx0XHQudG8oeyBhbHBoYTogMSwgeTogMjAwIH0sIDUwMCwgY3JlYXRlanMuRWFzZS5nZXRQb3dJbk91dCgyKSlcclxuXHRcdFx0LnRvKHsgeDogMTAwIH0sIDgwMCwgY3JlYXRlanMuRWFzZS5nZXRQb3dJbk91dCgyKSk7XHJcblxyXG5cdFx0Y3JlYXRlanMuVGlja2VyLnNldEZQUyg2MCk7XHJcblx0XHRjcmVhdGVqcy5UaWNrZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRpY2tcIiwgc3RhZ2UpO1xyXG5cdCovXHJcblxyXG5cdHN0YWdlLnVwZGF0ZSgpOyAvLyBjYW4ndCBiZSB1c2VkIHdoZW4gdXNpbmcgdHdlZW5cclxuXHRcdFx0XHJcbn07IiwiKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQndXNlIHN0cmljdCdcclxuXHJcblx0dmFyIHJlc2l6ZSA9IHJlcXVpcmUoJy4vcmVzaXplQ2FudmFzJyk7XHJcblxyXG5cdHJlc2l6ZSgpO1xyXG5cclxufSkoKTsiLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHR2YXIgZHJhdyA9IHJlcXVpcmUoJy4vZHJhdycpXHJcblxyXG5cdHZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZUNhbnZhcycpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplQ2FudmFzLCBmYWxzZSk7XHJcblxyXG5cdGZ1bmN0aW9uIHJlc2l6ZUNhbnZhcygpIHtcclxuXHJcblx0XHR2YXIgd2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCxcclxuXHRcdFx0aGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xyXG5cclxuXHRcdGlmICh3aWR0aCA+IGhlaWdodCkge1xyXG5cdFx0XHRjYW52YXMud2lkdGggPSBoZWlnaHQgLSAoaGVpZ2h0ICogMC4yKTtcclxuXHRcdFx0Y2FudmFzLmhlaWdodCA9IGhlaWdodCAtIChoZWlnaHQgKiAwLjIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Y2FudmFzLndpZHRoID0gd2lkdGggLSAod2lkdGggKiAwLjIpO1xyXG5cdFx0XHRjYW52YXMuaGVpZ2h0ID0gd2lkdGggLSAod2lkdGggKiAwLjIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGRyYXcoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcblx0fVxyXG5cclxuXHRyZXNpemVDYW52YXMoKTtcclxuXHJcbn07Il19
