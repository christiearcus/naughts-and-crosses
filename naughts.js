// globals.

var move = ""
playerX = 0;
playerO = 0;

var gameGrid = [
  "", "", "",
  "", "", "",
  "", "", ""
];

// switch player;

var whoGoesFirst = function() {
  var firstUp = Math.floor(Math.random() * 2);

  if (firstUp === 0) {
    console.log('Crosses start this time');
    move = 'X';
  }
  else {
    console.log("Naughts start this time");
    move = 'O';
  }
};

whoGoesFirst();

// interacting with grid

var gameBoardUI = document.getElementById('game-board');
gameBoardUI.addEventListener('click', function(event) {

  var index = Number(event.target.id);

  if (move === 'X') {
    event.target.innerText = move;
    gameGrid[index] = move;
    move = 'O';
  }
  else {
    event.target.innerText = move;
    gameGrid[index] = move;
    move = 'X'
  }
});

// get a winner.

var winner = function() {
  if (gameGrid.indexOf("X") === 0) {
    console.log('X is the winner of this game');
    playerX ++;
    clearBoard();
    return gameGrid;
  }
}

var clearBoard = function() {
  for (var i = 0; i < gameGrid.length; i ++) {
    gameGrid[i] = "";
    document.getElementById([i]).innerText = "";
  }
}
  // ensure to add logic for edge case no winner.
  // clear board for next game.
  // announce next round.

// [2,4,6]
// [0,4,8]
// [0,1,2]
// [0,3,6]
// [6,7,8]
// [2,5,8]
