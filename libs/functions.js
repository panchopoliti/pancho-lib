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

  function getObjectFromQueryString(searchLocation) {
    return searchLocation.replace('?', '')
      .split('&')
      .map((e) => e.split('='))
      .reduce((acum, [k, v]) => Object.assign({}, acum, { [k]: v }), {});
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

  function getKeyOfValue(obj, value) {
	  if (!Object.values(obj).includes(value)) {
	    return -1;
    }
    return Object.keys(obj)[Object.values(obj).indexOf(value)];
  }

	root.MyFunctions = {
		debounce,
    getRandomInt,
    getElementSiblings,
    getKeyOfValue,
    getObjectFromQueryString,
	};
})(this);
