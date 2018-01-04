var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function destructivelyAddElementToBeginningOfArray() {
  var numbers = [1, 2, 3]
  numbers.unshift (0)
}

function addElementToBeginningOfArray() {
  var numbers = [1, 2, 3]
  numbers = [0, ...numbers]
}
