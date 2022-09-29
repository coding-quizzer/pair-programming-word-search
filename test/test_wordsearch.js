const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch() horizontal", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present (horizontal)", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  })

  it("should return true if the word is present backwards (horizontal)", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'A', 'I', 'N', 'D', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['D', 'L', 'E', 'F', 'N', 'I', 'E', 'S'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  })
});

  describe ("#wordSearch() vertical", () => {

    it("should return true if the word is present (vertical)", function() {
      const result = wordSearch([
        ['A', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
        ['S', 'A', 'I', 'N', 'E', 'I', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'I', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'N', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'F', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'E', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'L', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'D', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
      ], 'SEINFELD')

      assert.isTrue(result);
    });
    
    it("should return true if the word is present (vertical up)", function() {
      const result = wordSearch([
        ['A', 'W', 'C', 'F', 'S', 'U', 'A', 'L'],
        ['S', 'A', 'I', 'N', 'D', 'I', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'L', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'F', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'I', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'E', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'S', 'U', 'A', 'L'],
      ], 'SEINFELD')

      assert.isTrue(result);
    });
  });

  /* describe ("#wordSearch() diagonal", () => {

    it("should return true if the word is present (diagonal up right)", function() {
      const result = wordSearch([
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

      assert.isTrue(result);
    });
  }); */

