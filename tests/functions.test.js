(function (root) {
  const f = root.MyFunctions;

  describe("getRandomInt", function() {
    it("should return a random number between 0 and the max", function() {
      assert(f.getRandomInt(20) <= 20 && f.getRandomInt(20) >= 0, 'the function is not working properly');
    });
  });


}(window));
