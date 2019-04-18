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
  // var solution = undefined;
  // declare a new board by size n
  // declare a var for a counter
  // iterate through all spaces
  // create coordinates (row, col)
  // toggle piece (row column) On
  // check for conflicts
  // if true toggle piece OFF then continue loop
  // if false increment counter then continue loop
  // check to see if counter is equal to n
  // if true return board

  var board = new Board({ 'n': n });
  var counter = 0;

  for (var i = 0; i < n * n; i++) {
    var row = Math.floor(i / n);
    var col = i % n;
    board.togglePiece(row, col);
    if (board.hasAnyRooksConflicts()) {
      board.togglePiece(row, col);
      continue;
    } else {
      counter++;
      if (counter === n) {
        return board.rows();
      }
      continue;
    }
  }
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function (n) {
  var solutionCount = 0;

  // var board = new Board({ 'n': n });
  // var pieceCounter = 0;

  // for (var i = 0; i < n; i++) {
  //   for (var j = i; j < n * n; j++) {
  //     var row = Math.floor(j / n);
  //     var col = j % n;

  //     board.togglePiece(row, col);

  //     if (board.hasAnyRooksConflicts()) {
  //       board.togglePiece(row, col);
  //       continue;
  //     } else {
  //       pieceCounter++;
  //       if (pieceCounter === n) {
  //         solutionCount++;
  //         break;
  //       }
  //       continue;
  //     }
  //   }
  // }

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function (n) {
  var solution;

  if (n === 0) {
    var result = new Board({ 'n': 0 });
    return result.rows();
  }

  for (var i = 0; i < n; i++) {
    var board = new Board({ 'n': n });
    var counter = 0;
    for (var j = i; j < n * n; j++) {

      var row = Math.floor(j / n);
      var col = j % n;
      console.log(row, col)
      board.togglePiece(row, col);
      if (board.hasAnyQueensConflicts()) {
        board.togglePiece(row, col);
      } else {
        counter++;
        if (counter === n) {
          solution = board.rows();
        }
      }
    }
  }

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function (n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
