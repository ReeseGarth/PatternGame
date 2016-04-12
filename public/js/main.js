(function() {

	'use strict'

	var createjs = require('createjs-collection'),
		squareNum = require('./randomIntFromInterval'),
		enquireStyles = require('./enquireJSStyles'),
		$ = require('jquery');

	global.jQuery = $;

	require('bootstrap');

	var update = true;
	var listeners = [];

	var playerOutput = document.getElementById("playerOutput"),
		stage = new createjs.Stage(document.getElementById('gameCanvas'));

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
			if (this.playerSequence[i] === undefined) {
				won = false;
				break;
			} else if (this.generatedSequence[i].name != this.playerSequence[i].name) {
				won = false;
				break;
			}
		}

		if (won && this.status == null)
			this.status = "won";
		else 
			this.status = "lost";

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

	Display.prototype.drawSquares = function(resized, redraw) {

		var colors = ["red", "green", "blue", "yellow"];

		var self = this;

		for (var i = 0; i < 4; i++) {
			if (!resized && !redraw) {
				var square = new createjs.Shape();
				square.name = colors[i].charAt(0).toUpperCase();
			} else {
				var square = this.stage.getChildAt(0);
				square.graphics.clear();
			}
			square.graphics.beginFill(colors[i]).drawRect(0, 0, this.calcSquareWidth(), this.calcSquareHeight())
			square.shadow = new createjs.Shadow("#000", 5, 5, 10);
			square.x = this.getXPosition(i);
			square.y = this.getYPosition(i);

			this.stage.addChild(square);

			if (redraw || !resized) {
				// allows click event to be registered many times per round, but assigns
				// only one click event
				if (this.round.roundNum != 4)
					square.off("click", listeners.shift());

				var listener = square.on("click", function(event) {
					self.round.playerSequence.push(this);
					if (playerOutput.value == "Sequence Complete." || playerOutput.value == "") 
						playerOutput.value = this.name;
					else
						playerOutput.value += ", " + this.name;
				});

				listeners.push(listener);

				// don't allow click event until after sequence is complete
				square.mouseEnabled = false;
			}
			
		}

		console.log('squares drawn');

		this.stage.update();

	};

	function Display(parent, round) {

		this.stage = stage;
		this.parent = parent;
		this.round = round;
		this.spacing = 10;

	}

	function setPlayerOutputSize(parent) {

		var height = parent.offsetHeight, width = parent.offsetWidth;

		playerOutput.style.height = 'auto';
		playerOutput.style.width = width + 'px';

	}

	// game starting function
	function runGame() {
		
		// apply media query styles
		enquireStyles();

		console.log('starting');

		// display game rules and how to play
		$('#gameModal').modal('show');

		function startRound(n) {

			runRound(new Round(n), function(status) {
				if (status == "lost") {
					$('#failedModal').modal('show');
					document.getElementById('roundNumber').innerHTML = n-3;
				} else {
					$('#successModal').modal('show');
					startRound(n + 1);
				}
			});

		}

		startRound(4);

	};

	function runRound(round, next) {
		var gameSection = document.getElementById('gameSection'),
			playerOutputSection = document.getElementById("playerOutputSection"),
			roundCount = document.getElementById("roundCount"),
			startBtn = document.getElementById('startButton'),
			nextRoundBtn = document.getElementById('nextRoundButton'),
			replayBtn = document.getElementById('replayButton'),
			resetBtn = document.getElementById('resetButton'),
			submitBtn = document.getElementById('submitButton');

		roundCount.innerHTML = "Round: " + (round.roundNum - 3);
		startBtn.style.display = "inline";
		resetBtn.style.display = "none";
		submitBtn.style.display = "none";

		setPlayerOutputSize(playerOutputSection);

		playerOutput.value = 'Ready to Start...';

		var display = new Display(gameSection, round);

		display.init();
		display.setStageSize(display.parent);

		console.log(round.roundNum);

		if (round.roundNum === 4) // create squares only if first round
			display.drawSquares(false, false);
		else 
			display.drawSquares(false, true);

		window.addEventListener('resize', resize, false);

		// resizes the game display and redraws the squares accordingly
		function resize() {

			display.setStageSize(display.parent);
			display.drawSquares(true, false);
			setPlayerOutputSize(playerOutputSection);

		};

		function startRound() {

			playerOutput.value = 'Displaying Sequence...';

			round.generateRandomSequence(display.stage);

			function runAnimation(square) {

				setTimeout(function() { round.animate(square); }, i * 3000);

			};

			for (var i = 0; i < round.generatedSequence.length; i++) {

				runAnimation(round.generatedSequence[i]);

			}

			// enable click event after total time to run animations (round * 3000)
			setTimeout(function() { 
				for (var i = 0; i < display.stage.children.length; i++) {
					display.stage.getChildAt(i).mouseEnabled = true;
				}

				resetBtn.style.display = "inline";
				submitBtn.style.display = "inline";
				playerOutput.value = 'Sequence Complete.';
			}, round.roundNum * 3000);
		};

		function resetStage() {

			stage.removeAllChildren();
			stage.clear();
			stage.update();
			stage = {};
			return new createjs.Stage(document.getElementById('gameCanvas'));

		}

		startBtn.onclick = function(e) {

			startRound();

		}

		nextRoundBtn.onclick = function(e) {

			startRound();

		}

		replayBtn.onclick = function(e) {

			stage = resetStage(); // create fresh new stage
			listeners = []; // clean up events attached to old squares
			runGame();

		}

		resetBtn.onclick = function(e) {

			round.playerSequence.length = 0;
			playerOutput.value = "";

		}

		submitBtn.onclick = function(e) {

			round.sequenceSubmitted();
			next(round.status);

		}
	};

	runGame();

})();