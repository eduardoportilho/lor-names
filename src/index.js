import uniqueRandomArray from 'unique-random-array'
const lotrNames = require('./lotr-names.json')

const mainExport = {
  all: lotrNames,
  random: uniqueRandomArray(lotrNames),
}

export default mainExport
module.exports = mainExport // for CommonJS compatibility
