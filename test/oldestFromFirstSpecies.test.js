const assert = require('assert'),
  zoo = require('../src/zoo'),
  data = require('../src/data');

let actual, expected, options

/**************************/
/* oldestFromFirstSpecies */
/**************************/

// passado o id de um funcionário, encontra a primeira espécie de animal
// gerenciado pelo funcionáio, e retorna um array com nome, sexo e idade do
// animal mais velho dessa espécide
actual = zoo.oldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992')
expected = ['Vicky', 'female', 12]

assert.deepEqual(actual, expected)

actual = zoo.oldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad')
expected = ['Margherita', 'female', 10]

assert.deepEqual(actual, expected)
/******************************************************************************/
