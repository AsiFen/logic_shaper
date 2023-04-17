describe('lowestSumForShape function ', function () {
    it('return the shape that has the lowest sum from given data set', function () {

     var shapes = [{"type":"triangle","color":"green","number":7,"size":"small"},
      {"type":"circle","color":"orange","number":1,"size":"small"}]
      assert.equal('circle', lowestSumForShape(shapes));

    });
    it ("should return please enter valid data", function(){
        assert.equal('please enter valid data', lowestSumForShape(''));

    });
    it("should return please enter valid input when the",function(){

        assert.equal('no input entered',lowestSumForShape("saffah"))
    })
});