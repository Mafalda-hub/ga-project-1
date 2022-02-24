let numSelected = null;
const tileSelected = null;
const restartButton = document.getElementById('restartButton');
let gridSize;
let solution;
let gameMode;

let errors = 0;

// STARTING BOARD

const easyboard = ['13--', '-2-3', '3-2-', '--31'];

const easysolution = ['1342', '4213', '3124', '2431'];

const hardboard = [
  '5---17-6-',
  '42-5-38-7',
  '-78---3--',
  '9-24----1',
  '-1-----4-',
  '3----1526',
  '--7---2--',
  '6--2---74',
  '-5-74---3',
];

const hardsolution = [
  '593817462',
  '426593817',
  '178624395',
  '962458731',
  '715362948',
  '384971526',
  '847136259',
  '639285174',
  '251749683',
];

// https://www.javatpoint.com/javascript-onload
window.onload = function () {
  setGame();
};
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
function setMode(mode) {
  clearBoard();
  setGame(mode);
}

function restartGame() {
  errors = 0;
  updateScore(errors);
  setMode(gameMode);
}

function clearBoard() {
  const board = document.getElementById('board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  const digits = document.getElementById('digits');
  while (digits.firstChild) {
    digits.removeChild(digits.firstChild);
  }
}

function setGame(mode) {
  let gameboard;
  const boardElement = document.getElementById('board');
  const digitsElement = document.getElementById('digits');
  if (mode === 'hard') {
    gridSize = 9;
    gameboard = hardboard;
    solution = hardsolution;
    boardElement.classList.replace('easy', 'hard');
    gameMode = 'hard';
    digitsElement.classList.replace('easydi', 'harddi');
  } else {
    gridSize = 4;
    gameboard = easyboard;
    solution = easysolution;
    boardElement.classList.remove('hard');
    boardElement.classList.add('easy');
    gameMode = 'easy';
    digitsElement.classList.remove('harddi');
    digitsElement.classList.add('easydi');
  }

  // available options
  for (let i = 1; i <= gridSize; i++) {
    const number = document.createElement('div');
    number.id = i;
    number.innerText = i;
    // calls the function selectNumber allowing you to click the numbers
    number.addEventListener('click', selectNumber);
    // add class to the div
    number.classList.add('number');
    document.getElementById('digits').appendChild(number);
  }

  // board 9x9
  for (let r = 0; r < gridSize; r++) {
    for (let c = 0; c < gridSize; c++) {
      // create div
      const tile = document.createElement('div');
      tile.id = r.toString() + '-' + c.toString(); //assigned id according to the position of the cells
      // removes the dash from the solution array
      if (gameboard[r][c] != '-') {
        tile.innerText = gameboard[r][c];
      }

      // everytime you click it calls de function selectTile
      tile.addEventListener('click', selectTile);
      // add class
      tile.classList.add('tile');
      // grab the id of the board and puts it together with tile
      document.getElementById('board').append(tile);
    }
  }
}

// create a function to select different numbers from the available options
function selectNumber() {
  if (numSelected !== null) {
    numSelected.classList.remove('number-selected');
  }
  numSelected = this;
  numSelected.classList.add('number-selected');
}

// create a function to select the tiles from the board
// prevent from overfilling the tiles that have a number already
function selectTile() {
  if (numSelected) {
    if (this.innerText !== '') {
      return;
    }
    const coords = this.id.split('-'); // splits the numbers in the arrays
    const r = parseInt(coords[0]); // turns the numbers into number and not strings
    const c = parseInt(coords[1]);

    if (solution[r][c] === numSelected.id) {
      this.innerText = numSelected.id;
    } else {
      // increases the errors everytime you make a mistake according to the solutions of the game
      // TO ADD: LIMIT OF 3 ERRORS
      errors += 1;
      updateScore(errors);
      if (errors >= 3) {
        updateScore('Game Over!');
      }
    }
  }
}

function updateScore(value) {
  document.getElementById('errors').innerText = value;
}

restartButton.addEventListener('click', restartGame);
