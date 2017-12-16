// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function toggleDrum(drumType, index) {
  if (drumType === 'kicks') {
    if (kicks[index] === false) {
      kicks[index] = true;
    } else if (kicks[index] === true) {
      kicks[index] = false;
    }
  }
  if (drumType === 'snares') {
    if (snares[index] === false) {
      snares[index] = true;
    } else if (snares[index] === true) {
      snares[index] = false;
    }
  }
  if (drumType === 'hiHats') {
    if (hiHats[index] === false) {
      hiHats[index] = true;
    } else if (hiHats[index] === true) {
      hiHats[index] = false;
    }
  }
  if (drumType === 'rideCymbals') {
    if (rideCymbals[index] === false) {
      rideCymbals[index] = true;
    } else if (rideCymbals[index] === true) {
      rideCymbals[index] = false;
    }
  }
} //end toggleDrum function

function clear(drumType) {
  if (drumType === 'kicks') {
    for(let i = 0; i < kicks.length; i++) {
      kicks[i] = false;
    }
  }
  if (drumType === 'snares') {
    for(let i = 0; i < snares.length; i++) {
      snares[i] = false;
    }
  }
  if (drumType === 'hiHats') {
    for(let i = 0; i < hiHats.length; i++) {
      hiHats[i] = false;
    }
  }
  if (drumType === 'rideCymbals') {
    for(let i = 0; i < rideCymbals.length; i++) {
      rideCymbals[i] = false;
    }
  }
} //end clear function

function invert(drumType) {
  if (drumType === 'kicks') {
    for(let i = 0; i < kicks.length; i++) {
        if (kicks[i] === false) {
          kicks[i] = true;
        } else if (kicks[i] === true) {
          kicks[i] = false;
        }
      }
    }
  if (drumType === 'snares') {
    for(let i = 0; i < snares.length; i++) {
        if (snares[i] === false) {
          snares[i] = true;
        } else if (snares[i] === true) {
          snares[i] = false;
        }
      }
    }
  if (drumType === 'hiHats') {
    for(let i = 0; i < hiHats.length; i++) {
        if (hiHats[i] === false) {
          hiHats[i] = true;
        } else if (hiHats[i] === true) {
          hiHats[i] = false;
        }
      }
      }
  if (drumType === 'rideCymbals') {
    for(let i = 0; i < rideCymbals.length; i++) {
        if (rideCymbals[i] === false) {
          rideCymbals[i] = true;
        } else if (rideCymbals[i] === true) {
          rideCymbals[i] = false;
        }
      }
    }
} //end invert function

function getNeighborPads(x, y, size) {
  if (x < 0 || y < 0 || y > size-1 || x > size-1) {
    return [];
  }
  //FIX VALUES TO ASSIGN BASED ON 0 INDEX BEING THE BOTTOM LEFT CORNER
  let synthArray = [];
    //corner cases
    if ((x === size-1 || x === 0) && (y === size-1 || y === 0)) {
      //asign values by corner
      if (x === 0 && y === 0) {
        synthArray = [[x+1, y], [x, y+1]];
      } else if (x === 0 && y === size-1) {
        synthArray = [[x+1, y], [x, y-1]];
      } else if (x === size-1 && y === 0) {
        synthArray = [[x, y+1], [x-1, y]];
      } else if (x === size-1 && y === size-1) {
        synthArray = [[x-1, y], [x, y-1]];
      }
      //left and right side cases
    } else if ((x === 0 || x === size-1) && (y !== size-1 || y !== 0)) {
      //asign values on edge of top and bottom of square
      if (x === 0) {
        synthArray = [[x, y-1], [x, y+1], [x+1, y]];
      } else if (x === size-1) {
        synthArray = [[x-1, y], [x, y+1], [x, y-1]];
      }
      //top and bottom side cases
    } else if ((y === 0 || y === size-1) && (x !== 0 || x !== size-1)) {
      //asign values on edge of right and left side of square
      if (y === 0) {
        synthArray = [[x-1, y], [x+1, y], [x, y+1]];
      } else if (y === size-1) {
        synthArray = [[x-1, y], [x+1, y], [x, y-1]];
      }
    } else if (x > 0 && x < size && y > 0 && y < size) {
      //asign values directly above and below selected position
      synthArray = [[x, y-1], [x, y+1], [x+1, y], [x-1, y]];
    }
  return synthArray;
} //end getNeighborPads function
