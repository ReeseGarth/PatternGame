module.exports = (function() {

    var enquire = require('enquire.js');
    var resetBtn = document.getElementById('resetButton'),
        submitBtn = document.getElementById('submitButton');

    enquire
        .register("(min-width: 768px), (min-height: 768px)", {
            match : function() {
                //startBtn.className = 'btn btn-success btn-lg';
                resetBtn.className = 'btn btn-danger btn-lg';
                submitBtn.className = 'btn btn-primary btn-lg';
            },
            unmatch : function() {
                //startBtn.className = 'btn btn-success btn-sm';
                resetBtn.className = 'btn btn-danger btn-xs';
                submitBtn.className = 'btn btn-primary btn-xs';
            }
        });
});