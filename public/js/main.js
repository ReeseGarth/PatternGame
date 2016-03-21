(function() {

	'use strict'

	var init = require('./init'),
		draw = require('./drawSquares'),
		sequence = require('./startRandomSequence'),
		$ = require('jquery');

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

		// draw squares onto the stage
		draw(stage, false);

		// display game rules and how to play
		$('#gameModal').modal('show');

		// begin game with start button press
		sequence(stage);
		
		console.log('initialized');
	};

	window.addEventListener('resize', resize, false);

	function resize() {

		draw(stage, true);

	};

})();