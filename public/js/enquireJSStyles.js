module.exports = (function() {

    var enquire = require('enquire.js');
    var button = document.getElementById('startButton');

    enquire
        .register("(min-width: 768px), (min-height: 768px)", {
            match : function() {
                button.className = 'btn btn-success btn-lg';
            },
            unmatch : function() {
                button.className = 'btn btn-success btn-md';
            }
        });
});