$(document).ready(function() {
	var player1Position = 0;
	var player2Position = 0;
	var isGameStarted = false;
	var gameWinner = false;
	var gameWidth = 1120;

    $(document).keyup(function(e) {
    	if (!isGameStarted || gameWinner) {
    		return;
    	}
    	console.log(e);
    	if (e.keyCode == 79) {
    		player1Position += 40;
        	$('.box').animate({left: player1Position},80);
        } else if  (e.keyCode == 88) {	
        	player2Position += 40;
        	$('.other-box').animate({left: player2Position},80);
        }

        if (player1Position >= gameWidth) {
        	gameWinner = true;
        } else if (player2Position >= gameWidth) {
        	gameWinner = true;
        }
    });



    $( '.reset-button' ).click(function() {
    	isGameStarted = true;
    });

     $('button.addPlayer1').click(function() {
    	var toAdd = $("input.player1Name").val();
        $('.player1Output').append("<p>"+toAdd+"</p>");
    });

     $('button.addPlayer2').click(function() {
    	var toAdd = $("input.player2Name").val();
        $('.player2Output').append("<p>"+toAdd+"</p>");
    });

    $('.player1Name, .player2Name').keyup(function(e) {
    	e.stopPropagation();
    	e.preventDefault();
    });
});