'use strict';

(function (root) {
	/**
  * Is Duplicate?
  * @param {Array} arr - the array to look in
  * @param {*} elem -  The value we are checking if it's duplicate
  * @return {boolean} If is Duplicate
  */
	function isDuplicate(arr, elem) {
		var checkArr = arr.slice();

		if (indexOf(checkArr, elem) === -1) {
			return false;
		} else {
			checkArr.splice(indexOf(checkArr, elem), 1);
			return indexOf(checkArr, elem) !== -1;
		}
	}

	/**
 * Concatenates arrays
 * @param {Arrays} arrays - the arrays to be concatenated
 * @return {Array} the resulting array of doing the concatenation
 */
	function concat() {
		var arrResult = [];

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = arguments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var arr = _step.value;
				var _iteratorNormalCompletion2 = true;
				var _didIteratorError2 = false;
				var _iteratorError2 = undefined;

				try {
					for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
						var _elem = _step2.value;

						arrResult.push(_elem);
					}
				} catch (err) {
					_didIteratorError2 = true;
					_iteratorError2 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion2 && _iterator2.return) {
							_iterator2.return();
						}
					} finally {
						if (_didIteratorError2) {
							throw _iteratorError2;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		return arrResult;
	}

	/**
 * Delete duplicate elements from an array
 * @param {Array} array - the array to remove duplicates
 * @return {Array} a new array containing unique elements
 */
	function deleteDuplicates(array) {
		var result = [];

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = array[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _elem2 = _step3.value;

				if (indexOf(result, _elem2) === -1) {
					result.push(_elem2);
				}
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		return result;
	}

	function intersectionBetweenTwoArr(array1, array2) {
		var arrResult = [];

		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = array1[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var a = _step4.value;
				var _iteratorNormalCompletion5 = true;
				var _didIteratorError5 = false;
				var _iteratorError5 = undefined;

				try {
					for (var _iterator5 = array2[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
						var b = _step5.value;

						if (a === b) {
							arrResult.push(a);
						}
					}
				} catch (err) {
					_didIteratorError5 = true;
					_iteratorError5 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion5 && _iterator5.return) {
							_iterator5.return();
						}
					} finally {
						if (_didIteratorError5) {
							throw _iteratorError5;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		return deleteDuplicates(arrResult);
	}

	function intersection() {
		var arrResult = arguments[0];
		var _iteratorNormalCompletion6 = true;
		var _didIteratorError6 = false;
		var _iteratorError6 = undefined;

		try {
			for (var _iterator6 = arguments[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
				var currArr = _step6.value;

				arrResult = intersectionBetweenTwoArr(arrResult, currArr);
			}
		} catch (err) {
			_didIteratorError6 = true;
			_iteratorError6 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion6 && _iterator6.return) {
					_iterator6.return();
				}
			} finally {
				if (_didIteratorError6) {
					throw _iteratorError6;
				}
			}
		}

		return arrResult;
	}

	function union() {
		var arrResult = [];

		var _iteratorNormalCompletion7 = true;
		var _didIteratorError7 = false;
		var _iteratorError7 = undefined;

		try {
			for (var _iterator7 = arguments[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
				var currArr = _step7.value;

				arrResult = concat(arrResult, currArr);
			}
		} catch (err) {
			_didIteratorError7 = true;
			_iteratorError7 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion7 && _iterator7.return) {
					_iterator7.return();
				}
			} finally {
				if (_didIteratorError7) {
					throw _iteratorError7;
				}
			}
		}

		return deleteDuplicates(arrResult);
	}

	function indexOf(arr, elem) {
		for (var i = 0; i < arr.length; i++) {
			if (elem === arr[i]) {
				return i;
			}
		}
		return -1;
	}

	function find(arr, elem) {
		var index = indexOf(arr, elem);
		return index === -1 ? undefined : arr[index];
	}

	function contains(arr, elem) {
		return indexOf(arr, elem) >= 0;
	}

	function filter(arr, fn) {
		var arrResult = [];

		if (typeof fn !== 'function') {
			return [];
		}

		var _iteratorNormalCompletion8 = true;
		var _didIteratorError8 = false;
		var _iteratorError8 = undefined;

		try {
			for (var _iterator8 = arr[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
				var a = _step8.value;

				if (fn(a)) {
					arrResult.push(a);
				}
			}
		} catch (err) {
			_didIteratorError8 = true;
			_iteratorError8 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion8 && _iterator8.return) {
					_iterator8.return();
				}
			} finally {
				if (_didIteratorError8) {
					throw _iteratorError8;
				}
			}
		}

		return arrResult;
	}

	function matrixSum(arr) {
		var result = 0;
		var _iteratorNormalCompletion9 = true;
		var _didIteratorError9 = false;
		var _iteratorError9 = undefined;

		try {
			for (var _iterator9 = arr[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
				var a = _step9.value;
				var _iteratorNormalCompletion10 = true;
				var _didIteratorError10 = false;
				var _iteratorError10 = undefined;

				try {
					for (var _iterator10 = a[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
						var b = _step10.value;

						result += b;
					}
				} catch (err) {
					_didIteratorError10 = true;
					_iteratorError10 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion10 && _iterator10.return) {
							_iterator10.return();
						}
					} finally {
						if (_didIteratorError10) {
							throw _iteratorError10;
						}
					}
				}
			}
		} catch (err) {
			_didIteratorError9 = true;
			_iteratorError9 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion9 && _iterator9.return) {
					_iterator9.return();
				}
			} finally {
				if (_didIteratorError9) {
					throw _iteratorError9;
				}
			}
		}

		return result;
	}

	function squareMatrix(arr) {
		var _iteratorNormalCompletion11 = true;
		var _didIteratorError11 = false;
		var _iteratorError11 = undefined;

		try {
			for (var _iterator11 = arr[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
				var a = _step11.value;

				if (arr.length !== a.length) {
					return false;
				}
			}
		} catch (err) {
			_didIteratorError11 = true;
			_iteratorError11 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion11 && _iterator11.return) {
					_iterator11.return();
				}
			} finally {
				if (_didIteratorError11) {
					throw _iteratorError11;
				}
			}
		}

		return true;
	}

	function diagonalMatrix(arr) {
		var sumResult = 0;
		if (!squareMatrix(arr)) {
			return -1;
		}
		for (var i = 0; i < arr.length; i++) {
			sumResult += arr[i][i];
		}
		return sumResult;
	}

	function each(arr, fn) {
		var _iteratorNormalCompletion12 = true;
		var _didIteratorError12 = false;
		var _iteratorError12 = undefined;

		try {
			for (var _iterator12 = arr[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
				elem = _step12.value;

				fn(elem);
			}
		} catch (err) {
			_didIteratorError12 = true;
			_iteratorError12 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion12 && _iterator12.return) {
					_iterator12.return();
				}
			} finally {
				if (_didIteratorError12) {
					throw _iteratorError12;
				}
			}
		}
	}

	function map(arr, fn) {
		var arrResult = [];

		if (typeof fn !== 'function') {
			return arr;
		}

		var _iteratorNormalCompletion13 = true;
		var _didIteratorError13 = false;
		var _iteratorError13 = undefined;

		try {
			for (var _iterator13 = arr[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
				var a = _step13.value;

				arrResult.push(fn(a));
			}
		} catch (err) {
			_didIteratorError13 = true;
			_iteratorError13 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion13 && _iterator13.return) {
					_iterator13.return();
				}
			} finally {
				if (_didIteratorError13) {
					throw _iteratorError13;
				}
			}
		}

		return arrResult;
	}

	function head(arr) {
		return arr[0];
	}

	function tail(arr) {
		var arrResult = [];
		for (var i = 1; i < arr.length; i++) {
			arrResult.push(arr[i]);
		}
		return arrResult;
	}

	/**
 * Reduces the array to a single value
 * @param {Array} arr - the array to reduce
 * @param {Function} fn - the function which will set the condition of reduction
 * @param {Number} init - The accumulator initial value
 * @return {Any} A single value
 */
	function reduceArray(arr, fn, init) {
		var acum = init;
		for (var i = 0; i < arr.length; i++) {
			acum = fn(acum, arr[i]);
		}
		return acum;
	}

	/**
  * Reorder every element in the array in a random order
  * @param {Array} arr - the array to shuffle
  * @return {Array} A new array with every element shuffled
  */

	function shuffle(arr) {
		var arrResult = [];
		while (arrResult.length !== arr.length) {
			var nextIndex = MyFunctions.getRandomInt(arr.length - 1);
			if (!arrResult.includes(nextIndex)) {
				arrResult.push(nextIndex);
			}
		}
		return map(arrResult, function (index) {
			return arr[index];
		});
	}

	/**
  * Reorder every element according to the condition passed in the callback
  * @param {Array} arr - the array to reorder
  * @param {Function} cb - the function which will set the condition of order
  * @return {Array} The same array reordered. The sort occur in place.
  */

	function sort(arr) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < arr.length - 1; j++) {
				var a = arr[j];
				var b = arr[j + 1];

				if (cb === null) {
					if (a > b) {
						arr[j] = b;
						arr[j + 1] = a;
					}
				} else if (cb(arr[j], arr[j + 1]) > 0) {
					arr[j] = b;
					arr[j + 1] = a;
				}
			}
		}
		return arr;
	}

	/**
  * Check if every element of an array is truthy.
  * @param {Array} arr - the array to check over
  * @param {Function} cb - the function which will set the condition to check
  * @return {Boolean} If only one element don't check the condition, it will return false
  */

	function every(arr, cb) {

		for (var i = 0; i < arr.length; i++) {
			if (!cb(arr[i], i)) {
				return false;
			}
		}
		return true;
	}

	/**
  * Check if some element of an array is truthy.
  * @param {Array} arr - the array to check over
  * @param {Function} cb - the function which will set the condition to check
  * @return {Boolean} If one element check the condition, it will return true
  */

	function some(arr, cb) {

		for (var i = 0; i < arr.length; i++) {

			if (cb(arr[i], i)) {
				return true;
			}
		}
		return false;
	}

	root.arraysLib = {
		concat: concat,
		deleteDuplicates: deleteDuplicates,
		intersectionBetweenTwoArr: intersectionBetweenTwoArr,
		intersection: intersection,
		union: union,
		indexOf: indexOf,
		contains: contains,
		filter: filter,
		matrixSum: matrixSum,
		squareMatrix: squareMatrix,
		diagonalMatrix: diagonalMatrix,
		each: each,
		map: map,
		tail: tail,
		head: head,
		find: find,
		reduceArray: reduceArray,
		shuffle: shuffle,
		sort: sort,
		isDuplicate: isDuplicate,
		every: every,
		some: some
	};
})(window);