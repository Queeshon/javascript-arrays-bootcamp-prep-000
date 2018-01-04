var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, 'foo') {
  array = ['foo',...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, 'foo') {
  array.unshift ('foo')
  return array
}

function addElementToEndOfArray(array, 'foo') {
  array = [...array, 'foo']
  return array
}

function destructivelyAddElementToEndOfArray(array, 'foo') {
  array.push ('foo')
  return array
}

function accessElementInArray() {
  var numbers = [1]
}

function destructivelyRemoveElementFromBeginningOfArray() {
  
}

function removeElementFromBeginningOfArray() {
  
}

function destructivelyRemoveElementFromEndOfArray() {
  
}

