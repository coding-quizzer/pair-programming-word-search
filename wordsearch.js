const transpose = function(matrix) {
    const newMatrix = matrix[0].map((L, x) => matrix.map(y => y[x]));
    return newMatrix;
  };

const horizontalWordSearch = function (letters, word) {
  const horizontalJoin = letters.map(ls => ls.join(''));
    
  for (l of horizontalJoin) {
      if (l.search(word) !== -1) return true
  }

  return false;
}

const wordSearch = (letters, word) => { 
    if (horizontalWordSearch(letters, word)) return true;

    const verticalLetters = transpose(letters);

    if (horizontalWordSearch(verticalLetters, word)) return true;

    let reversedLetters = letters;
    reversedLetters = reversedLetters.map(l => l.reverse());

    if (horizontalWordSearch(reversedLetters, word)) return true;

    let reversedVerticalLetters = verticalLetters;
    reversedVerticalLetters = reversedVerticalLetters.map(l => l.reverse());

    if (horizontalWordSearch(reversedVerticalLetters, word)) return true;

    // const diagonalUpRightLetters = [];

    // console.log("letters:", letters);
    
    /* const maxSum = letters.length + letters[0].length - 1;
    for (let sum = 0; sum < 16; sum ++) {
      const innerArray = [];
      for (let y in letters) {
        for (let x in letters[y]) {
          x = parseInt(x);
          y = parseInt(y);

          if (x + y === sum) {
            innerArray.push(letters[y][x]);
          }
        
        }
      }

        console.log(innerArray);
        diagonalUpRightLetters.push(innerArray)
    }

    if (horizontalWordSearch(diagonalUpRightLetters, word)) return true;
     */

    return false;
}



module.exports = wordSearch

wordSearch([
  ['A', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
  ['S', 'V', 'I', 'N', 'E', 'I', 'L', 'D'],
  ['Y', 'F', 'Q', 'F', 'I', 'D', 'A', 'L'],
  ['H', 'M', 'J', 'Y', 'I', 'V', 'R', 'G'],
  ['W', 'H', 'C', 'U', 'I', 'E', 'R', 'L'],
  ['B', 'F', 'Q', 'E', 'E', 'D', 'Y', 'B'],
  ['U', 'S', 'T', 'W', 'L', 'P', 'A', 'I'],
  ['O', 'D', 'C', 'A', 'D', 'U', 'A', 'S'],
  ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
], 'SQUID')
// [[0, 0]], [[0, 1], [1, 0]], [[2, 0], [1, 1], [0, 2]] 