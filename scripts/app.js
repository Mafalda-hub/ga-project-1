//  ? 9x9BOARD

let numSelected = null;
const tileSelected = null;
const errorElement = document.getElementById('errors');

let errors = 0;

// STARTING BOARD
const easyboard = [
  '5---17-6-',
  '42-5-381-',
  '---62--9-',
  '---458-31',
  '71-3--9-8',
  '3-4-7-52-',
  '8-7-3-2--',
  '6-92-5-74',
  '-5-74-6--',
];

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

const solution = [
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
  const board = document.getElementById('board');
  while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
  const digits = document.getElementById('digits');
  while (digits.firstChild) {
    digits.removeChild(digits.firstChild);
  }
  setGame(mode);
}

function setGame(mode) {
  let gameboard;
  if (mode === 'hard') {
    gameboard = hardboard;
  } else {
    gameboard = easyboard;
  }
  // available options
  for (let i = 1; i <= 9; i++) {
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
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
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
      document.getElementById('errors').innerText = errors;

      if (errors >= 3) {
        errorElement.innerText = 'Game Over!';
        // document.getElementById('#errors');
        // errors.innerHTML = 'GAME OVER';
      }
    }
  }
}
