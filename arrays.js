var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  var numbers = [1]
  numbers = ['foo',...numbers]
  return numbers
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift ('foo')
  return array
}

function addElementToEndOfArray(array, element) {
  var numbers = [1]
  numbers = [...numbers, 'foo']
  return numbers
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push ('foo')
  return array
}

function accessElementInArray(array, element) {
  var array = [1, 2, 3]
  console.log (array[2])
}

function destructivelyRemoveElementFromBeginningOfArray() {

}

function removeElementFromBeginningOfArray() {

}

function destructivelyRemoveElementFromEndOfArray() {

}
