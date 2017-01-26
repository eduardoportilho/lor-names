import {expect} from 'chai'
import lotrNames from '.'

describe('lotr-names', () => {
  it('should have a list of all available names', () => {
    expect(lotrNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(lotrNames.random()).to.satisfy(isIncludedIn(lotrNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
