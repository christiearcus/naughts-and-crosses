// globals.

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

// switch player;

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
      winner();
    }
});

var winner = function() {

    var gameString = gameGrid.join("");

    if (
      (gameString[0] == "X") && (gameString[1] == "X") && (gameString[2] == "X") ||
      (gameString[2] == "X") && (gameString[4] == "X") && (gameString[6] == "X") ||
      (gameString[0] == "X") && (gameString[4] == "X") && (gameString[8] == "X") ||
      (gameString[3] == "X") && (gameString[4] == "X") && (gameString[5] == "X") ||
      (gameString[0] == "X") && (gameString[3] == "X") && (gameString[6] == "X") ||
      (gameString[6] == "X") && (gameString[7] == "X") && (gameString[8] == "X") ||
      (gameString[1] == "X") && (gameString[4] == "X") && (gameString[7] == "X") ||
      (gameString[2] == "X") && (gameString[5] == "X") && (gameString[8] == "X")) {
        console.log('X is the winner of this game');
        playerX ++;
        document.getElementById('player-X').innerText = playerX;
        clearBoard();
        endGame();
        startRound();
    }

    else if (
      (gameString[0] == "O") && (gameString[1] == "O") && (gameString[2] == "O") ||
      (gameString[2] == "O") && (gameString[4] == "O") && (gameString[6] == "O") ||
      (gameString[0] == "O") && (gameString[4] == "O") && (gameString[8] == "O") ||
      (gameString[3] == "O") && (gameString[4] == "O") && (gameString[5] == "O") ||
      (gameString[0] == "O") && (gameString[3] == "O") && (gameString[6] == "O") ||
      (gameString[6] == "O") && (gameString[7] == "O") && (gameString[8] == "O") ||
      (gameString[1] == "O") && (gameString[4] == "O") && (gameString[7] == "O") ||
      (gameString[2] == "O") && (gameString[5] == "O") && (gameString[8] == "O")) {
        console.log('O is the winner of this game');
        playerO ++;
        document.getElementById('player-O').innerText = playerO;
        clearBoard();
        endGame();
        startRound();
    }

    else if (gameGrid.indexOf('e') == -1) {
      console.log("It's a draw!");
  }
  else {
    console.log('no winner yet!');
  }
};

// clear board

var clearBoard = function() {
  for (var i = 0; i < gameGrid.length; i ++) {
    gameGrid[i] = "";
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
