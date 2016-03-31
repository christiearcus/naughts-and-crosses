// globals

var move = ""
var playerX = 0;
var playerO = 0;

var gameGrid = [
  "e", "e", "e",
  "e", "e", "e",
  "e", "e", "e"
];

document.getElementById('player-X').innerText = ' ' + playerX;
document.getElementById('player-O').innerText = ' ' + playerO;

// get a random player to begin with

var startRound = function() {
  var addtoDiv = document.getElementById('starter');
  var firstUp = Math.floor(Math.random() * 2);
    if (firstUp === 0) {
      addtoDiv.innerHTML = 'Player X begins this round';
    move = 'X';
    }
    else {
      addtoDiv.innerHTML = 'Player O begins this round';
    move = 'O';
  }
};

startRound();

// interacting with grid

var gameBoardUI = document.getElementById('game-board');
gameBoardUI.addEventListener('click', function(event) {
  var index = Number(event.target.id);
    if (move === 'X') {
      event.target.innerText = move;
      gameGrid[index] = move;
      move = 'O';
      winner();
    }
    else {
      event.target.innerText = move;
      gameGrid[index] = move;
      move = 'X';
      winner('O');
    }
});

// Check for winner
// for loop to check how many in a row? Might work for horizontals

var winner = function(winCheck) {
  var gameString = gameGrid.join("");
    if (
      (gameString[0] == winCheck) && (gameString[1] == winCheck) && (gameString[2] == winCheck) ||
      (gameString[2] == winCheck) && (gameString[4] == winCheck) && (gameString[6] == winCheck) ||
      (gameString[0] == winCheck) && (gameString[4] == winCheck) && (gameString[8] == winCheck) ||
      (gameString[3] == winCheck) && (gameString[4] == winCheck) && (gameString[5] == winCheck) ||
      (gameString[0] == winCheck) && (gameString[3] == winCheck) && (gameString[6] == winCheck) ||
      (gameString[6] == winCheck) && (gameString[7] == winCheck) && (gameString[8] == winCheck) ||
      (gameString[1] == winCheck) && (gameString[4] == winCheck) && (gameString[7] == winCheck) ||
      (gameString[2] == winCheck) && (gameString[5] == winCheck) && (gameString[8] == winCheck)) {
        console.log(winCheck + ' is the winner of this game');
        playerX ++;
        document.getElementById('player-X').innerText = playerX;
        clearBoard();
        endGame();
        startRound();
      }
      else if (gameGrid.indexOf('e') == -1) {
        console.log("draw");
        clearBoard();
      }
      else {
        console.log('no winner yet');
      }
};

// clear board

var clearBoard = function() {
  for (var i = 0; i < gameGrid.length; i ++) {
    gameGrid[i] = "e";
    document.getElementById([i]).innerText = "";
  };
};

// end game

var endGame = function() {
  if (playerX === 3) {
    alert('Player X is the ultimate champ!');
  }
  else if (playerO === 3) {
    alert('Player O is the ultimate champ!');
  }
  else {
    return;
  };
};
