var fadeTime = 1 * 1000;
var fadeInHeader = 0.4 * 1000;
var fadeInCard = 3 * 1000;
var fadeInInput = 5 * 1000;
var fadeToCard2 = 7 * 1000;

function showCard(index) {
    $(".card").fadeOut(fadeTime);
    setTimeout(function() {
        $("#card_" + index).fadeIn(fadeTime)
        $.cookie('currentCard', index)
    }, fadeTime)
}

$(document).ready(function() {

//    var fadeInHeader = 0.4 * 1000;
//    var fadeInCard = 0.6 * 1000;
//    var fadeInInput = 1 * 1000;
//    var fadeToCard2 = 1.5 * 1000;


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
                console.log("You got it!");
                $('input').val('')
            } else {
                $('input').effect("shake", 300);
            }
        }
    };

    function isCorrectGuess(term) {
        var index;
        switch(term) {
            case "meet":
                index = 3;
                break;
            case "bang":
                index = 4;
                break;
            case "date":
                index = 5;
                break;
            case "love":
                index = 6;
                break;
            case "nopa":
                index = 7;
                break;
            case "move":
                index = 8;
                break;
            case "ring":
                index = 9;
                break;
            default:
                return false;
        }
        showCard(index);
        return true;
    }
})



