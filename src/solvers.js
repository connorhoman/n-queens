/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function (n) {

  // var board = new Board({ 'n': n });
  // var counter = 0;

  // for (var i = 0; i < n * n; i++) {
  //   var row = Math.floor(i / n);
  //   var col = i % n;
  //   board.togglePiece(row, col);
  //   if (board.hasAnyRooksConflicts()) {
  //     board.togglePiece(row, col);
  //     continue;
  //   } else {
  //     counter++;
  //     if (counter === n) {
  //       return board.rows();
  //     }
  //     continue;
  //   }
  // }



};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0;
  var board = new Board({ 'n': n });

  var findSolution = function (row) {
    if (row === n) {
      solutionCount++;
      return;
    }



    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()) {
        findSolution(row + 1);
      }


      board.togglePiece(row, i);
    }
  }

  findSolution(0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {


  if (n === 0) {
    return [];
  }
  var solution;
  var board = new Board({ 'n': n });

  var findSolution = function (row) {
    if (row === n) {
      solution = board.rows();
      return;
    }



    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }

      if (solution === undefined) {
        board.togglePiece(row, i);
      }
    }
  }

  findSolution(0);
  console.log('A single solution for ' + n + ' queens is:', solution);
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = 0;
  var board = new Board({ 'n': n });

  var findSolution = function (row) {
    if (row === n) {
      solutionCount++;
      return;
    }



    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);

      if (!board.hasAnyQueensConflicts()) {
        findSolution(row + 1);
      }


      board.togglePiece(row, i);
    }
  }

  findSolution(0);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
