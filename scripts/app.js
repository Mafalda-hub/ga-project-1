/* eslint-disable no-unused-vars */
// let numSelected = null;
// const tileSelected = null;

// let errors = 0;

// // STARTING BOARD
// const board = ['13--', '-2-3', '3-2-', '--31'];

// const solution = ['1342', '4213', '3124', '2431'];

// // https://www.javatpoint.com/javascript-onload
// window.onload = function () {
//   setGame();
// };

// function setGame() {
//   // available options
//   for (let i = 1; i <= 4; i++) {
//     const number = document.createElement('div');
//     number.id = i;
//     number.innerText = i;
//     // calls the function selectNumber allowing you to click the numbers
//     number.addEventListener('click', selectNumber);
//     // add class to the div
//     number.classList.add('number');
//     document.getElementById('digits').appendChild(number);
//   }

//   // board 4x4
//   for (let r = 0; r < 4; r++) {
//     for (let c = 0; c < 4; c++) {
//       // create div
//       const tile = document.createElement('div');
//       tile.id = r.toString() + '-' + c.toString(); //assigned id according to the position of the cells
//       // removes the dash from the solution array
//       if (board[r][c] != '-') {
//         tile.innerText = board[r][c];
//         // give it other color to know what the start board is
//         // tile.classList.add('tile-start');
//       }
//       // if (r === 2) {
//       //   tile.classList.add('horizontal-line');
//       // }
//       // if (c === 2) {
//       //   tile.classList.add('vertical-line');
//       // }

//       // everytime you click it calls de function selectTile
//       tile.addEventListener('click', selectTile);
//       // add class
//       tile.classList.add('tile');
//       // grab the id of the board and puts it together with tile
//       document.getElementById('board').append(tile);
//     }
//   }
// }

// // create a function to select different numbers from the available options
// function selectNumber() {
//   if (numSelected != null) {
//     numSelected.classList.remove('number-selected');
//   }
//   numSelected = this;
//   numSelected.classList.add('number-selected');
// }

// // create a function to select the tiles from the board
// //prevent from overfilling the tiles that have a number already
// function selectTile() {
//   if (numSelected) {
//     if (this.innerText != '') {
//       return;
//     }

//     // '0-0' '0-1' ... '3-1' -> relation between each row and each number
//     const coords = this.id.split('-'); // splits the numbers in the arrays
//     const r = parseInt(coords[0]); // turns the numbers into number and not strings
//     const c = parseInt(coords[1]);

//     if (solution[r][c] === numSelected.id) {
//       this.innerText = numSelected.id;
//     } else {
//       // increases the errors everytime you make a mistake according to the solutions of the game
//       // TO ADD: LIMIT OF 3 ERRORS
//       errors += 1;
//       document.getElementById('errors').innerText = errors;
//     }
//   }
// }

//  ? 9x9BOARD

let numSelected = null;
const tileSelected = null;

let errors = 0;

// STARTING BOARD
const board = [
  '5---17-6-',
  '42-5-38-7',
  '-78---3--',
  '9624----1',
  '-1-----4-',
  '3----1526',
  '--7---25-',
  '6-92-5-74',
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

function setGame() {
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

  // board 4x4
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      // create div
      const tile = document.createElement('div');
      tile.id = r.toString() + '-' + c.toString(); //assigned id according to the position of the cells
      // removes the dash from the solution array
      if (board[r][c] != '-') {
        tile.innerText = board[r][c];
        // give it other color to know what the start board is
        // tile.classList.add('tile-start');
      }
      // if (r === 2) {
      //   tile.classList.add('horizontal-line');
      // }
      // if (c === 2) {
      //   tile.classList.add('vertical-line');
      // }

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
