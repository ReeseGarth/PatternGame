(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

		canvas.width = window.innerWidth - (window.innerWidth * 0.2);
		canvas.height = window.innerWidth - (window.innerHeight * 0.4);

		draw();
	}

	resizeCanvas();

};
},{"./draw":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwdWJsaWMvanMvZHJhdy5qcyIsInB1YmxpYy9qcy9tYWluLmpzIiwicHVibGljL2pzL3Jlc2l6ZUNhbnZhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIndXNlIHN0cmljdCdcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG5cdHZhciBzdGFnZSA9IG5ldyBjcmVhdGVqcy5TdGFnZShcImdhbWVDYW52YXNcIik7XHJcblxyXG5cdHZhciBzcXVhcmVPbmUgPSBuZXcgY3JlYXRlanMuU2hhcGUoKSxcclxuXHRcdHNxdWFyZVR3byA9IG5ldyBjcmVhdGVqcy5TaGFwZSgpLFxyXG5cdFx0c3F1YXJlVGhyZWUgPSBuZXcgY3JlYXRlanMuU2hhcGUoKSxcclxuXHRcdHNxdWFyZUZvdXIgPSBuZXcgY3JlYXRlanMuU2hhcGUoKTtcclxuXHJcblx0Ly8gcmVjdGFuZ2xlIHBhcmFtcyAtIHgsIHksIHdpZHRoLCBoZWlnaHRcclxuXHRzcXVhcmVPbmUuZ3JhcGhpY3MuYmVnaW5GaWxsKFwicmVkXCIpLmRyYXdSZWN0KDEwMCwgMTAwLCAxMDAsIDEwMCk7XHJcblx0c3RhZ2UuYWRkQ2hpbGQoc3F1YXJlT25lKTtcclxuXHJcblx0c3F1YXJlVHdvLmdyYXBoaWNzLmJlZ2luRmlsbChcImdyZWVuXCIpLmRyYXdSZWN0KDMwMCwgMTAwLCAxMDAsIDEwMCk7XHJcblx0c3RhZ2UuYWRkQ2hpbGQoc3F1YXJlVHdvKTtcclxuXHJcblx0c3F1YXJlVGhyZWUuZ3JhcGhpY3MuYmVnaW5GaWxsKFwiYmx1ZVwiKS5kcmF3UmVjdCgxMDAsIDMwMCwgMTAwLCAxMDApO1xyXG5cdHN0YWdlLmFkZENoaWxkKHNxdWFyZVRocmVlKTtcclxuXHJcblx0c3F1YXJlRm91ci5ncmFwaGljcy5iZWdpbkZpbGwoXCJ5ZWxsb3dcIikuZHJhd1JlY3QoMzAwLCAzMDAsIDEwMCwgMTAwKTtcclxuXHRzdGFnZS5hZGRDaGlsZChzcXVhcmVGb3VyKTtcclxuXHJcblx0LyogXHJcblx0XHQtQ2hhbmdpbmcgeCBtb3ZlcyB0aGUgc2hhcGUgaG9yaXpvbmF0YWxseVxyXG5cdFx0LUNoYW5naW5nIHkgbW92ZXMgdGhlIHNoYXBlIHZlcnRpY2FsbHlcclxuXHRcdC1DaGFuZ2luZyBhbHBoYSB3aWxsIGZhZGUgdGhlIHNoYXBlIGluIGFuZCBvdXRcclxuXHQqL1xyXG5cclxuXHQvKlxyXG5cdFx0Y3JlYXRlanMuVHdlZW4uZ2V0KGNpcmNsZSwgeyBsb29wOiB0cnVlIH0pXHJcblx0XHRcdC50byh7IHg6IDQwMCB9LCAxMDAwLCBjcmVhdGVqcy5FYXNlLmdldFBvd0luT3V0KDQpKVxyXG5cdFx0XHQudG8oeyBhbHBoYTogMCwgeTogMTc1IH0sIDUwMCwgY3JlYXRlanMuRWFzZS5nZXRQb3dJbk91dCgyKSlcclxuXHRcdFx0LnRvKHsgYWxwaGE6IDAsIHk6IDIyNSB9LCAxMDApXHJcblx0XHRcdC50byh7IGFscGhhOiAxLCB5OiAyMDAgfSwgNTAwLCBjcmVhdGVqcy5FYXNlLmdldFBvd0luT3V0KDIpKVxyXG5cdFx0XHQudG8oeyB4OiAxMDAgfSwgODAwLCBjcmVhdGVqcy5FYXNlLmdldFBvd0luT3V0KDIpKTtcclxuXHJcblx0XHRjcmVhdGVqcy5UaWNrZXIuc2V0RlBTKDYwKTtcclxuXHRcdGNyZWF0ZWpzLlRpY2tlci5hZGRFdmVudExpc3RlbmVyKFwidGlja1wiLCBzdGFnZSk7XHJcblx0Ki9cclxuXHJcblx0c3RhZ2UudXBkYXRlKCk7IC8vIGNhbid0IGJlIHVzZWQgd2hlbiB1c2luZyB0d2VlblxyXG5cdFx0XHRcclxufTsiLCIoZnVuY3Rpb24oKSB7XHJcblxyXG5cdCd1c2Ugc3RyaWN0J1xyXG5cclxuXHR2YXIgcmVzaXplID0gcmVxdWlyZSgnLi9yZXNpemVDYW52YXMnKTtcclxuXHJcblx0cmVzaXplKCk7XHJcblxyXG59KSgpOyIsIid1c2Ugc3RyaWN0J1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdHZhciBkcmF3ID0gcmVxdWlyZSgnLi9kcmF3JylcclxuXHJcblx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lQ2FudmFzJyk7XHJcblxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVDYW52YXMsIGZhbHNlKTtcclxuXHJcblx0ZnVuY3Rpb24gcmVzaXplQ2FudmFzKCkge1xyXG5cclxuXHRcdGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIC0gKHdpbmRvdy5pbm5lcldpZHRoICogMC4yKTtcclxuXHRcdGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtICh3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjQpO1xyXG5cclxuXHRcdGRyYXcoKTtcclxuXHR9XHJcblxyXG5cdHJlc2l6ZUNhbnZhcygpO1xyXG5cclxufTsiXX0=
