/* eslint-disable no-unused-vars */
let numSelected = null;
const tileSelected = null;

let errors = 0;

// change to start board
const board = ['13--', '-2-3', '3-2-', '--31'];

const solution = ['1342', '4213', '3124', '2431'];

window.onload = function () {
  setGame();
};

function setGame() {
  // digits 1-4
  for (let i = 1; i <= 4; i++) {
    const number = document.createElement('div');
    number.id = i;
    number.innerText = i;
    // calls the function selectNumber allowing you to click the numbers
    number.addEventListener('click', selectNumber);
    // add class to the div
    number.classList.add('number');
    document.getElementById('digits').appendChild(number);
  }

  // board 4x4
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 4; c++) {
      // create div
      const tile = document.createElement('div');
      tile.id = r.toString() + '-' + c.toString();
      if (board[r][c] != '-') {
        tile.innerText = board[r][c];
        tile.classList.add('tile-start');
      }
      if (r === 2) {
        tile.classList.add('horizontal-line');
      }
      if (c === 2) {
        tile.classList.add('vertical-line');
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
  if (numSelected != null) {
    numSelected.classList.remove('number-selected');
  }
  numSelected = this;
  numSelected.classList.add('number-selected');
}

// create a function to select the tiles from the board
//prevent from overfilling the tiles that have a number already
function selectTile() {
  if (numSelected) {
    if (this.innerText != '') {
      return;
    }

    // '0-0' '0-1' ... '3-1' -> relation between each row and each number
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
    }
  }
}