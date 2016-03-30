// globals.

var move = ""
var playerX = 0;
var playerO = 0;

var gameGrid = [
  "", "", "",
  "", "", "",
  "", "", ""
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
  if (gameGrid.indexOf("X") === "[0,1,2]") {
    console.log('X is the winner of this game');
    playerX ++;
    document.getElementById('player-X').innerText = playerX;
    clearBoard();
    endGame();
    startRound();
  }
  else {
    return console.log('no winner yet!')
  };
};

// [2,4,6]
// [0,4,8]
// [0,1,2]
// [0,3,6]
// [6,7,8]
// [2,5,8]

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
