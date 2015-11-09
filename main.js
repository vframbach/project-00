//player positions as they move around board
//written as percentages so size of board can be changed

var player1Positions = [
	{left: "10%", top: "0%"},
	{left: "30%", top: "0%"},
	{left: "50%", top: "0%"},
	{left: "70%", top: "0%"},
	{left: "90%", top: "0%"},
	{left: "92%", top: "10%"},
	{left: "92%", top: "30%"},
	{left: "92%", top: "50%"},
	{left: "92%", top: "70%"},
	{left: "92%", top: "85%"},
	{left: "90%", top: "88%"},
	{left: "70%", top: "88%"},
	{left: "50%", top: "88%"},
	{left: "30%", top: "88%"},
	{left: "10%", top: "88%"},
	{left: "0%", top: "90%"},
	{left: "0%", top: "70%"},
	{left: "0%", top: "50%"},
	{left: "0%", top: "30%"},
	{left: "0%", top: "10%"}
];

var player2Positions = [
	{left: "10%", top: "5%"},
	{left: "30%", top: "5%"},
	{left: "50%", top: "5%"},
	{left: "70%", top: "5%"},
	{left: "95%", top: "5%"},
	{left: "95%", top: "10%"},
	{left: "95%", top: "30%"},
	{left: "95%", top: "50%"},
	{left: "95%", top: "70%"},
	{left: "95%", top: "90%"},
	{left: "90%", top: "93%"},
	{left: "70%", top: "93%"},
	{left: "50%", top: "93%"},
	{left: "30%", top: "93%"},
	{left: "10%", top: "93%"},
	{left: "5%", top: "83%"},
	{left: "5%", top: "70%"},
	{left: "5%", top: "50%"},
	{left: "5%", top: "30%"},
	{left: "5%", top: "10%"}
];

$(document).ready(function() {
	var player1 = {
		position: 0,
		wins: 0
	};
	var player2 = {
		position: 0,
		wins: 0
	};

	var isGameStarted = false;
	var gameWinner = false;

// key up after key press signals movement
// player 1 is X (key code 88), player 2 is O (key code 79)
    $(document).keyup(function(e) {
    	if (!isGameStarted || gameWinner) {
    		return;
    	}
    	console.log(e);
    	if (e.keyCode == 88) {
    		player1.position += 1;
        	$('.box').animate(player1Positions[player1.position],80);
        } else if  (e.keyCode == 79) {	
        	player2.position += 1;
        	$('.other-box').animate(player2Positions[player2.position],80);
        }

// determines winner
        if (player1.position == player1Positions.length - 1) {
        	gameWinner = player1;
        } else if (player2.position == player2Positions.length - 1) {
        	gameWinner = player2;
        }

// displays how many wins each player has
        if (gameWinner === player1) {
        	player1.wins++;
        	$('.player1Output').append("🏆 ");
        } else if (gameWinner === player2) {
        	player2.wins++;
        	$('.player2Output').append("🏆 ");
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
    function resetGame() {
    	player1.position = 0;
		player2.position = 0;
    	isGameStarted = false;
		gameWinner = false;
        $('.box').animate(player1Positions[player1.position],80);
		$('.other-box').animate(player2Positions[player2.position],80);
    	$('.start-button').show();
    	$('.reset-button').hide();
    }
// reset button returns both players to start line and button switches to start button
    $( '.reset-button' ).click(function() {
    	resetGame();
    });

//initialized game by calling reset function 

	resetGame();

});