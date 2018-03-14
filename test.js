const assert = require('assert');
const hurryUpOnMeeting = require('./src/index.js');

describe('hurryUpOnMeeting function', () => {
  it('should return Hurrah! result in case of NO side streets in case that you are on time', () => {
    assert.equal(hurryUpOnMeeting("abcXdef", [], 40, 80, 34), "Hurrah!");
    assert.equal(hurryUpOnMeeting("Xabcdef", [], 40, 80, 30), "Hurrah!");
  });

  it('should return Hurrah! result in case of NO side streets in case that you are late', () => {
    assert.equal(hurryUpOnMeeting("abcdefX", [], 40, 80, 34), "I am running about 2 minutes late!");
    assert.equal(hurryUpOnMeeting("abcdefX", [], 40, 80, 33), "I am running about 3 minutes late!");
  });

  it('should return Hurrah! result in case of side streets in case that you are on time', () => {
    assert.equal(hurryUpOnMeeting("abcdeXghi", ["","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 40), "Hurrah!");
    assert.equal(hurryUpOnMeeting("abcdeXghi", ["A","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 41), "Hurrah!");
    assert.equal(hurryUpOnMeeting("abcdeXghi", ["AAA","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 43), "Hurrah!");
  });

  it('should return Hurrah! result in case of side streets in case that you are late', () => {
    assert.equal(hurryUpOnMeeting("abcdeXghi", ["A","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 40), "I am running about 1 minutes late!");
    assert.equal(hurryUpOnMeeting("abcdeXghi", ["AAA","","CCCCC","","EEEEEEEEEE","FFFFFF","","","IIIIII"], 40, 80, 31), "I am running about 12 minutes late!");
  });
});
