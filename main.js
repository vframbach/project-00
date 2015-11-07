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
    	if (e.keyCode == 88) {
    		player1Position += 40;
        	$('.box').animate({left: player1Position},80);
        } else if  (e.keyCode == 79) {	
        	player2Position += 40;
        	$('.other-box').animate({left: player2Position},80);
        }

        if (player1Position >= gameWidth) {
        	gameWinner = 1;
        } else if (player2Position >= gameWidth) {
        	gameWinner = 2;
        }

        if (gameWinner === 1) {
        	$('.player1Output').append("Player 1 wins!");
        } else if (gameWinner === 2) {
        	$('.player2Output').append("Player 2 wins!");
        }
    });

// once start button is clicked, x and o move the red and blue players
// once game starts, start button is hidden and reset button appears
    $( '.start-button' ).click(function() {
    	isGameStarted = true;
    	$('.start-button').hide();
    	$('.reset-button').show();
    });

// players each enter name in box and it appears under box
     $('button.addPlayer1').click(function() {
    	var toAdd = $("input.player1Name").val();
        $('.player1Output').append("<p>"+toAdd+"</p>");
    });

     $('button.addPlayer2').click(function() {
    	var toAdd = $("input.player2Name").val();
        $('.player2Output').append("<p>"+toAdd+"</p>");
    });

// reset button returns both players to start line and button switches to start button
    $( '.reset-button' ).click(function() {
    	player1Position = 0;
		player2Position = 0;
		gameWinner = false;
    	$('.box').animate({left: player1Position},80);
    	$('.other-box').animate({left: player2Position},80);
    	$('.start-button').show();
    	$('.reset-button').hide();
    });
});