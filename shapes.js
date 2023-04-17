//	Which shape’s sum of numbers is the lowest? 
//Create a function called lowestSumForShape that can find out.

function lowestSumForShape(shapesArray) {
  var holder = {}
  var shapes = ''
  var min = Infinity;


  if (shapesArray !== null && shapesArray !== '') {
    if (typeof shapesArray == 'object') {
      var getShapes = function(shape) {
        for (var i = 0; i < shapesArray.length; i++) {
          var type = shapesArray[i].type
          if (holder[type] === undefined) {
            holder[type] = shapesArray[i].number

          }

          else {
            holder[type] += shapesArray[i].number
          }
        }
      }
      var getLowest= function() {
        for (var x in holder) {
          if (holder[x] < min) {
            min = holder[x]
            shapes = x

          }
        }
      return shapes
    }
    }

    else {
      return 'no input entered'
    }
  }
  else {
    return 'please enter valid data'
  }

  return {
    getLowest,
    getShapes
  }
}
