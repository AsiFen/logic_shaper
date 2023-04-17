//	Which shape’s sum of numbers is the lowest? 
//Create a function called lowestSumForShape that can find out.

function lowestSumForShape(shapes) {
  var holder = {}
  var shapez = ''
  var min = Infinity;


  if (shapes !== null && shapes !== '') {
    if (typeof shapes == 'object') {

      for (var i = 0; i < shapes.length; i++) {
        var type = shapes[i].type
        if (holder[type] === undefined) {
          holder[type] = shapes[i].number

        }

        else {
          holder[type] += shapes[i].number
        }

      }
      for (var x in holder) {
        if (holder[x] < min) {
          min = holder[x]
          shapez = x

        }
      }

      return shapez
    }

    else {
      return 'no input entered'
    }
  }
  else {
    return 'please enter valid data'
  }
}
