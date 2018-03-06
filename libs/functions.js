(function(root) {

	let concurrentTimeouts = {};

	/** it's not concurrent */
	function debounce(fn, millis) {
		if (concurrentTimeouts[fn]) {
			clearTimeout(concurrentTimeouts[fn]);
			concurrentTimeouts[fn] = null;
		}

		concurrentTimeouts[fn] = setTimeout(fn, millis);
	}

  function getRandomInt(max) {
    const random = Math.random();
    if (random === 1) {
      return max;
    } else {
      return Math.floor(random * (max+1));
    }
  }

  function getElementSiblings(element) {
    const arrResult = [];
    let nextSibling = element.nextElementSibling;
    let previousSibling = element.previousElementSibling;
    while (nextSibling !== null) {
      arrResult.push(nextSibling);
      nextSibling = nextSibling.nextElementSibling;
    }
    while (previousSibling !== null) {
      arrResult.push(previousSibling);
      previousSibling = previousSibling.previousElementSibling;
    }
    return arrResult;
  }

	root.MyFunctions = {
		debounce,
    getRandomInt,
    getElementSiblings,
	};
})(this);
