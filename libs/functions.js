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

	root.MyFunctions = {
		debounce,
    getRandomInt,
	};
})(this);
