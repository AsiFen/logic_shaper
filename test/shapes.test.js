describe('lowestSumForShape function ', function () {
    it('return the shape that has the lowest sum from given data set', function () {
        var shapesArray = [{ "type": "circle", "color": "red", "number": 2, "size": "medium" },
        { "type": "circle", "color": "blue", "number": 9, "size": "small" },
        { "type": "square", "color": "red", "number": 4, "size": "small" },
        { "type": "circle", "color": "red", "number": 7, "size": "small" },
        { "type": "circle", "color": "red", "number": 4, "size": "medium" },
        { "type": "triangle", "color": "green", "number": 6, "size": "small" },
        { "type": "circle", "color": "yellow", "number": 6, "size": "small" },
        { "type": "square", "color": "blue", "number": 3, "size": "small" },
        { "type": "triangle", "color": "orange", "number": 1, "size": "small" },
        { "type": "triangle", "color": "red", "number": 8, "size": "small" }]
        var lowestSumShape = lowestSumForShape(shapesArray);
        lowestSumShape.getShapes(shapesArray)

        assert.equal('square', lowestSumShape.getLowest());

    });

    it("should return  'no input entered when data no data is entered", function () {
        assert.equal('no input entered', lowestSumForShape(''));

    });
    it("should return please enter valid input when the data type is not an object", function () {

        assert.equal('please enter valid input', lowestSumForShape("saffah"))
    })
    it('gets all the shapes availables and their summed numbers', function () {


    })
});