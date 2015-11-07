$(document).ready(function() {
    $(document).keydown(function() {
        $('.box').animate({left:'+=10px'},80);
    });
    $(document).keydown(function() {
        $('.other-box').animate({left:'+=10px'},80);
    });

    $( '.reset-button' ).click(function() {

    });
});