(function (root) {
 const a = root.arraysLib;
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

  describe("isDuplicate", function() {

    it("returns if an array has a duplicate", function() {
      assert(a.isDuplicate([2,3], 2) === false, 'it has a duplicate');
    });

    it("returns if an array has a duplicate", function() {
      assert(a.isDuplicate([2,3,2], 2) === true, 'it has no duplicate');
    });

    it("returns if an array has a duplicate", function() {
      assert(a.isDuplicate([2,3,2,2,2,2,2,2,2,2,2,2,2], 2) === true, 'it has no duplicate');
    });

    it("returns if an array has a duplicate", function() {
      assert(a.isDuplicate([], 2) === false, 'it has a duplicate');
    });
  });

  describe("concat", function() {

    it("[2,3] concatenated with [3,4] should return [2,3,3,4]", function() {
      assert(equalArrays(a.concat([2,3],[3,4]), [2,3,3,4]), 'arrays are not equal');
    });

    it("[] concatenated with [] should return []", function() {
      assert(equalArrays(a.concat([],[]), []), 'arrays are not equal');
    });
  });

  describe("intersection", function(){
    it('should return the intersection between two arrays', function(){
      assert(equalArrays(a.intersection( [1,2,3,4],[2,4,6,8] ), [2,4]), 'elements are not equal');
    });

    it('should return the intersection among arrays', function(){
      assert(equalArrays(a.intersection( [1,2,2,2,3,4,5,5,5,5,5,5,5,5,5,5,5,5,6,7,8,8,9],[1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,5,5,5,7,9], [1,3,9,7], [1,3,7] ), [1,3,7] ), 'elements are not equal');
    });

  });

  describe("union", function() {
    it('should return the union between two arrays', function() {
      assert(equalArrays(a.union( [1,2,3,4],[2,4,6,8] ), [1,2,3,4,6,8] ), 'elements are not equal');
    });

    it('should return the union among arrays', function() {
      assert(equalArrays(a.union( [1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,5,6,7,8,1,2,3,5,3,4,6,7,1,2,8],
        [2,3,4,1,1,1,1,1,1,1,1,2,3,4,5,6,7,8,3,4,5,2,4],
        [1,2,3,4,5,6,7,8,9,10,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,3,3,3,3,3],
        [11,12,13,1,2,11,11,12,11,12,11,11,11,11,11,11,11] ),
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 'elements are not equal');
    });
  });

  describe("indexOf", function() {
    it('should return the position in the array of the chosen element', function() {
      const myArr = [4,3,2,1,1,2,3,4];
      assert(a.indexOf(myArr, 2) === 2, 'elements are not equal');
    });

    it('should return the position in the array of the chosen element', function() {
      const myArr = [1,2,3,4];
      assert(a.indexOf(myArr, 2) === 1, 'elements are not equal');
    });
  });

  describe("filter", function() {
    it('should filter an array and return even numbers', function() {
      assert(equalArrays(a.filter([1,2,3,4,5,6], e => e%2 === 0), [2,4,6]), 'arrays are not equal');
    })

    it('should filter an array and return numbers bigger than 3', function() {
      assert(equalArrays(a.filter([1,2,3,4,5,6], e => e > 3), [4,5,6]), 'arrays are not equal');
    })

    it('should filter an array and return strings with more than 4 letters', function() {
      assert(equalArrays(a.filter(['pep','pepe','peter','pedro'], e => e.length > 4), ['peter','pedro']),
        'arrays are not equal');
    })

  });

  describe("map", function() {
    it('should duplicate elements of array', function() {
      assert(equalArrays(a.map([1,2,3], e => e*2), [2,4,6]), 'arrays are not equal');
    })
  });


  describe("head", function() {
    it('should return the first element of the array', function() {
      const myArr = [1,2,3,4];
      assert(a.head(myArr) === 1, 'elements are not equal');
    });
  });

  describe("tail", function() {
    it('should return a new array with all the elements without the first', function() {
      const myArr = [1,2,3,4];
      assert(equalArrays(a.tail(myArr), [2,3,4]), 'elements are not equal');
    });
  });

  describe("contains", function() {
    it("should return a boolean whether an array contains the element or not", function() {
      const myArr = ['santi', 'andy', 'pancho', 'gonza'];
      assert(a.contains(myArr, 'santi') === true, "santi is not in the array");
    });

    it("should return a boolean whether an array contains the element or not", function() {
      const myArr = ['SaNtI', 'andy', 'pancho', 'gonza'];
      assert(a.contains(myArr, 'santi') === false, "santi is in the array");
    });
  });

  describe("reduceArray", function() {

    it("should return any single value", function() {
      const myArr = [3, 4, 5, 6];
      assert(a.reduceArray(myArr, (acum, elem) => acum + elem, 0) === 18, "the sum is different");
    });

    it("should return any single value", function() {
      const myArr = [3, 4, 5, 6];
      assert(a.reduceArray(myArr, (acum, elem) => acum + elem, 0) === 18, "the sum is different");
    });
  });

  describe("shuffle", function() {

    it("should return a new shuffled array", function() {
      const myArr = [1, 2, 3, 4, 5, 6];
      assert(a.shuffle(myArr).length === myArr.length, "The length of the array is different");
    });

    it("should return a new shuffled array", function() {
      const myArr = [3, 4, 5, 6];
      const resultArr = a.shuffle(myArr);
      let cond = true;
      for (let i = 0; i < resultArr.length; i++) {
        if(!a.contains(resultArr, myArr[i])) {
          cond = false
        }
      }
      assert((cond), 'the function is not working')
    });
  });

  describe("sort", function() {

    it("should return the same array in a new order. Trying the fn without cb parameter", function() {
      const myArr = [1, 4, 3, 2, 6, 5];
      assert(equalArrays(a.sort(myArr), [1, 2, 3, 4, 5, 6]), "the no callback parameter is not working");
    });

    it("should return the same array in a new order. Trying with max to min param", function() {
      const myArr = [1, 4, 3, 2, 6, 5];
      assert(equalArrays(a.sort(myArr, (a, b) => {
        if (a < b) {
          return 1;
        }
      }), [6, 5, 4, 3, 2, 1]), "the callback parameter is not working");
    });

    it("should return the same array in a new order. Trying with max to min param with several numbers in arr", function() {
      const myArr = [18, 20, 6, 2, 3, 90, 8, 72, 3, 54, 21, 29, 3, 1];
      assert(equalArrays(a.sort(myArr, (a, b) => {
        if (a < b) {
          return 1;
        }
      }), [90, 72, 54, 29, 21, 20, 18, 8, 6, 3, 3, 3, 2, 1]), "the callback parameter is not working");
    });

    it("should return the same array in a new order. Trying min to max param with strings in arr", function() {
      const myArr = ['perro', 'gato', 'cebra', 'león', 'gacela', 'antilope', 'pinguino'];
      assert(equalArrays(a.sort(myArr, (a, b) => {
        if (a > b) {
          return 1;
        }
      }), ['antilope', 'cebra', 'gacela', 'gato', 'león', 'perro', 'pinguino']), "the callback parameter is not working");
    });
  });


}(window));
