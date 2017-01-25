import {expect} from 'chai';
import lor from './index';

describe('lor-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(lor.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function() {
      expect(lor.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('should return a random item from the lor.all', function() {
      var randomItem = lor.random();
      expect(lor.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = lor.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(lor.all).to.include(item);
      });
    });
  });
});
