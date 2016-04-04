(function() {

	'use strict'

	var createjs = require('createjs-collection'),
		squareNum = require('./randomIntFromInterval'),
		$ = require('jquery');

	global.jQuery = $;

	require('bootstrap');

	var update = true;

	/** ROUND OBJECT **/
	Round.prototype.isFinished = function() {

		return this.status != null && this.finishDelay < 0;

	};

	// TODO: rename from result
	Round.prototype.result = function() {
		
		if (this.status != null) 
			this.finishDelay -= 0.05;

	};

	Round.prototype.generateRandomSequence = function(stage) {

		for (var i = 0; i < this.roundNum; i++) {
			var square = stage.getChildAt(squareNum(0, 3));

			this.generatedSequence.push(square);
		}

		createjs.Ticker.addEventListener("tick", (function(stage) 
			{ return function(e) {tick(e, stage); }; 
		})(stage));

	};

	Round.prototype.sequenceSubmitted = function() {

		var won = true;

		for (var i = 0; i < this.generatedSequence.length; i++) {
			if (this.generatedSequence[i] != this.playerSequence[i])
				won = false;
		}

		if (won && this.status == null) {
			this.status = "won";
			this.finishDelay = 1;
		} else {
			this.status = "lost";
			this.finishDelay = 1;
		}

	};

	Round.prototype.animate = function(square) {

		createjs.Tween.get(square).play(
			createjs.Tween.get(square,{paused:true})
			.to({alpha:0.5}, 1500)
			.to({alpha:1}, 1500)
		);

	};

	// TODO: think of better name than roundnum
	function Round(roundNum) {

		this.generatedSequence = [];
		this.playerSequence = [];
		this.roundNum = roundNum;

		this.status = this.finishDelay = null;

	};

	function tick(event, stage) {

		stage.update(event);

	};

	/** DISPLAY OBJECT **/
	Display.prototype.init = function() {

		createjs.Touch.enable(this.stage);
		this.stage.enableMouseOver(10);
		this.stage.mouseMoveOutside = true;
		console.log('initialized');

	};

	Display.prototype.setStageSize = function(parent) {
		
		var height = parent.offsetHeight, width = parent.offsetWidth;

		// this ensures the squares are always squares and fit within the screen
		if (width > height) {
			this.stage.canvas.width = height;
			this.stage.canvas.height = height;
		} else {
			this.stage.canvas.width = width;
			this.stage.canvas.height = width;
		}

	};

	Display.prototype.calcSquareWidth = function() {

		return this.stage.canvas.width * 0.4;

	};

	Display.prototype.calcSquareHeight = function() {

		return this.stage.canvas.height * 0.4;

	};

	Display.prototype.calcXOffset = function() {

		return (this.stage.canvas.width / 2) - this.calcSquareWidth() - 5;

	};

	Display.prototype.calcYOffset = function() {

		return (this.stage.canvas.height / 2) - this.calcSquareHeight() - 5;

	};

	Display.prototype.getXPosition = function(squareId) {

		if (squareId === 0 || squareId === 2) 
			return this.calcXOffset();
		else 
			return this.calcXOffset() + this.calcSquareWidth() + this.spacing;

	};

	Display.prototype.getYPosition = function(squareId) {

		if (squareId === 0 || squareId === 1) 
			return this.calcYOffset();
		else 
			return this.calcYOffset() + this.calcSquareHeight() + this.spacing;

	};

	Display.prototype.drawSquares = function(resized) {

		var colors = ["red", "green", "blue", "yellow"];

		var self = this;

		for (var i = 0; i < 4; i++) {
			if (!resized) {
				var square = new createjs.Shape();
			} else {
				var square = this.stage.getChildAt(0);
				square.graphics.clear();
			}
			square.graphics.beginFill(colors[i]).drawRect(0, 0, this.calcSquareWidth(), this.calcSquareHeight())
			square.shadow = new createjs.Shadow("#000", 5, 5, 10);
			square.x = this.getXPosition(i);
			square.y = this.getYPosition(i);

			this.stage.addChild(square);

			square.on("click", function(event) {
				self.round.playerSequence.push(this);
			});
			
		}

		console.log('squares drawn');

		this.stage.update();

	};

	Display.prototype.clear = function() {

		this.stage.removeAllChildren();
		this.stage.update();

	};

	function Display(parent, round) {

		this.stage = new createjs.Stage(document.getElementById('gameCanvas'));
		this.parent = parent;
		this.round = round;
		this.spacing = 10;

	}

	// game starting function
	function runGame() {
		
		console.log('starting');

		function startRound(n) {

			var gameOutput = document.getElementById("gameOutput");
			runRound(new Round(n), function(status) {
				if (status == "lost") {
					gameOutput.innerHTML = "You entered the incorrect sequence. Better luck next time!";
				} else {
					gameOutput.innerHTML = "Nice going, you got the right sequence!";
					// allow user to begin round in 5 secs
					setTimeout(function() { startRound(n + 1); }, 5000);
				}
			});

		}

		startRound(4);

	};

	function runRound(round, next) {
		var gameSection = document.getElementById('gameSection'),
			gameOutput = document.getElementById("gameOutput"),
			roundCount = document.getElementById("roundCount"),
			startBtn = document.getElementById('startButton'),
			submitBtn = document.getElementById('submitButton');

		var display = new Display(gameSection, round);

		roundCount.innerHTML = "Round: " + (round.roundNum - 3);
		startBtn.disabled = false;
		gameOutput.innerHTML = "";

		console.log('beginning round');

		// initialize the stage and shapes
		display.init();
		display.setStageSize(display.parent);
		display.drawSquares(false);

		window.addEventListener('resize', resize, false);

		// resizes the game display and redraws the squares accordingly
		function resize() {

			display.setStageSize(display.parent);
			display.drawSquares(true);

		};

		startBtn.onclick = function(e) {

			// user can't spam the start button
			startBtn.disabled = true;

			console.log("begin sequence");

			round.generateRandomSequence(display.stage);

			function runAnimation(square) {

				setTimeout(function() { round.animate(square); }, i * 3000);

			};

			for (var i = 0; i < round.generatedSequence.length; i++) {

				runAnimation(round.generatedSequence[i]);

			}

		}

		submitBtn.onclick = function(e) {

			round.sequenceSubmitted();
			
			next(round.status);

		}
	};

	runGame();

})();