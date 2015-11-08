$(document).ready(function() {
	var player1 = {
		position: 0,
		wins: 0,
		name: null
	};
	var player2 = {
		position: 0,
		wins: 0,
		name: null
	};

	var isGameStarted = false;
	var gameWinner = false;
	var gameWidth = 1120;

// key up after key press signals movement
// player 1 is X (key code 88), player 2 is O (key code 79)
    $(document).keyup(function(e) {
    	if (!isGameStarted || gameWinner) {
    		return;
    	}
    	console.log(e);
    	if (e.keyCode == 88) {
    		player1.position += 40;
        	$('.box').animate({left: player1.position},80);
        } else if  (e.keyCode == 79) {	
        	player2.position += 40;
        	$('.other-box').animate({left: player2.position},80);
        }

// determines winner
        if (player1.position >= gameWidth) {
        	gameWinner = player1;
        } else if (player2.position >= gameWidth) {
        	gameWinner = player2;
        }

// displays how many wins each player has
        if (gameWinner === player1) {
        	player1.wins++;
        	$('.player1Output').append("<p>Player 1 has " + player1.wins + " wins!</p>");
        } else if (gameWinner === player2) {
        	player2.wins++;
        	$('.player2Output').append("<p>Player 2 has " + player2.wins + " wins!</p>");
        }
    });

    $('.player1Name, .player2Name').keypress(function(e) {
    	if (e.keyCode == 13) {
    		this.blur();
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
    	player1.position = 0;
		player2.position = 0;
    	isGameStarted = false;
		gameWinner = false;
    	$('.box').animate({left: player1.position},80);
    	$('.other-box').animate({left: player2.position},80);
    	$('.start-button').show();
    	$('.reset-button').hide();
    });

});