(function() {

	'use strict'

	var init = require('./init'),
		draw = require('./drawSquares'),
		sequence = require('./startRandomSequence'),
		$ = require('jquery'),
		enquireStyles = require('./enquireJSStyles');

	global.jQuery = $;

	require('bootstrap');

	var stage;

	// Polling for the sake of my intern tests
	var interval = setInterval(function() {
	    if(document.readyState === 'complete') {
	        clearInterval(interval);
	        done();
	    }    
	}, 100);

	function done() {

		// setup the stage
		stage = init();

		// apply media query styles
		enquireStyles();

		// draw squares onto the stage
		draw(stage, false);

		// display game rules and how to play
		$('#gameModal').modal('show');

		console.log('initialized');

	};

	// begin game with start button press
	var startBtn = document.getElementById('startButton');

	startBtn.onclick = function(e) {

		// user can't spam the start button
		startBtn.disabled = true;

		console.log("begin sequence");

		// begin the sequence
		sequence(stage);

		
	};

	window.addEventListener('resize', resize, false);

	function resize() {

		draw(stage, true);

	};

})();