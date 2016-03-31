// globals

var move = ""
var playerX = 0;
var playerO = 0;
var draw = 0;

var gameGrid = [
  "e", "e", "e",
  "e", "e", "e",
  "e", "e", "e"
];


document.getElementById('player-O').innerText = ' ' + playerO;
document.getElementById('player-X').innerText = ' ' + playerX;
document.getElementById('draw-counter').innerText = ' ' + draw;

// get a random player to begin with

var startRound = function() {
  var addtoDiv = document.getElementById('starter');
  var firstUp = Math.floor(Math.random() * 2);
    if (firstUp === 0) {
      addtoDiv.innerHTML = 'Fighter Jets starts this round';
    move = 'X';
    }
    else {
      addtoDiv.innerHTML = 'Rockets begins this round';
    move = 'O';
  }
};

startRound();

// interacting with grid

var gameBoardUI = document.getElementById('game-board');
gameBoardUI.addEventListener('click', function(event) {
  var index = Number(event.target.id);
  var index2 = event.target.id;
    if (move === 'X') {
      document.getElementById(index2).className = "col fa fa-fighter-jet fa-3x";
      gameGrid[index] = move;
      move = 'O';
      winner('X');
    }
    else if (move === 'O'){
      document.getElementById(index2).className = "col fa fa-rocket fa-3x";
      gameGrid[index] = move;
      move = 'X';
      winner('O');
    }
});

// Check for winner
// for loop to check how many in a row? Might work for horizontals

var winner = function(winCheck) {
  var gameString = gameGrid.join("");
  var winnerFound = false
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
        winnerFound = true;
        clearBoard();
        startRound();
      }
      else if (gameGrid.indexOf('e') == -1) {
        console.log("draw");
        draw ++;
        clearBoard();
        startRound();
      }
      else {
        console.log('no winner yet');
      };

      if (winnerFound == true && winCheck === "X") {
        playerX ++;
        document.getElementById('player-X').innerText = playerX;
        endGame();
      }
      else if (winnerFound == true && winCheck === "O") {
        playerO ++;
        document.getElementById('player-O').innerText = playerO;
        endGame();
      }
};

// clear board

var clearBoard = function() {
  for (var i = 0; i < gameGrid.length; i ++) {
    gameGrid[i] = "e";
    document.getElementById([i]).className = "col";
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
