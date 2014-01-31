$(document).ready(function() {

    $('input').bind("keypress", {}, keypressInBox);

    function keypressInBox(e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        if (code == 13) { //Enter keycode
            e.preventDefault();
            var term = $('input').val()
            if(isCorrectGuess(term)) {
                console.log("YES!")
            } else {
                $('input').effect("shake", 300);
            }
        }
    };

    function isCorrectGuess(term) {
        return false;
    }

    function showCard(index) {

    }
})

