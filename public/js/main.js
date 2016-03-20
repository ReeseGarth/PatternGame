(function() {

	'use strict'

	var init = require('./init'),
		draw = require('./drawSquares');

	// Polling for the sake of my intern tests
	var interval = setInterval(function() {
	    if(document.readyState === 'complete') {
	        clearInterval(interval);
	        done();
	    }    
	}, 100);

	function done() {

		window.addEventListener('resize', resize, false);

		var stage = init();
		draw(stage, false);
		console.log('complete');

		function resize() {

			draw(stage, true);

		}

	}

	

	var randomInt = require('./randomIntFromInterval');

	var randomSquare = randomInt(1, 4);

})();