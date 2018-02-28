(function (root) {
  const f = root.MyFunctions;
  function equalArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }

    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }

    return true;
  }

  describe("getRandomInt", function() {
    it("should return a random number between 0 and the max", function() {
      assert(f.getRandomInt(20) <= 20 && f.getRandomInt(20) >= 0, 'the function is not working properly');
    });

  });


}(window));
