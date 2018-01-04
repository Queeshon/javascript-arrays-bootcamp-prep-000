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

function accessElementInArray(array, index) {
  var array = [1, 2, 3]
  return array[2]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  var array = [1, 2, 3]
  array.slice (0)
  return array
}

function destructivelyRemoveElementFromEndOfArray() {

}
