const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  beforeEach(() => {
    testWord = new Word("test");
  });


  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      console.log(testWord);
      // expect({a: 1}).to.have.property('b');
      expect(testWord).to.have.property('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(testWord.word).to.equal('test');
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      result = testWord.removeVowels();
      expect(result).to.equal('tst');
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      result = testWord.removeConsonants();
      expect(result).to.equal('e');
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      result = testWord.pigLatin();
      expect(result).to.equal('esttay');
    });
  });
});
