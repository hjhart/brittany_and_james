$(document).ready(function() {

    var fadeTime = 1 * 1000;

//    var fadeInHeader = 0.4 * 1000;
//    var fadeInCard = 0.6 * 1000;
//    var fadeInInput = 1 * 1000;
//    var fadeToCard2 = 1.5 * 1000;

    var fadeInHeader = 0.4 * 1000;
    var fadeInCard = 3 * 1000;
    var fadeInInput = 5 * 1000;
    var fadeToCard2 = 7 * 1000;

    setTimeout(function() {
        $('#head_honcho').fadeIn(fadeTime)
    }, fadeInHeader);

    setTimeout(function() {
        $("input").fadeTo(fadeTime, 1);
    }, fadeInInput)

    if($.cookie('received_intro') == '1') {
        var currentCard = $.cookie('currentCard')
        setTimeout(function() {
            $("#card_" + currentCard).fadeIn(fadeTime)
            $.cookie('currentCard', 2)
        }, fadeInCard)
    } else {
        setTimeout(function() {
            $("#card_1").fadeIn(fadeTime);
            $.cookie('currentCard', 1)
        }, fadeInCard)

        setTimeout(function() {
            $("#card_1").fadeOut(fadeTime)
        }, fadeToCard2)

        setTimeout(function() {
            $("#card_2").fadeIn(fadeTime)
            $.cookie('currentCard', 2)
            $.cookie('received_intro', '1');
        }, fadeToCard2 + fadeTime)
    }



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



