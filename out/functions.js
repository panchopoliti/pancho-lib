"use strict";

(function (root) {

  var concurrentTimeouts = {};

  /** it's not concurrent */
  function debounce(fn, millis) {
    if (concurrentTimeouts[fn]) {
      clearTimeout(concurrentTimeouts[fn]);
      concurrentTimeouts[fn] = null;
    }

    concurrentTimeouts[fn] = setTimeout(fn, millis);
  }

  function getRandomInt(max) {
    var random = Math.random();
    if (random === 1) {
      return max;
    } else {
      return Math.floor(random * (max + 1));
    }
  }

  function getElementSiblings(element) {
    var arrResult = [];
    var nextSibling = element.nextElementSibling;
    var previousSibling = element.previousElementSibling;
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
    debounce: debounce,
    getRandomInt: getRandomInt,
    getElementSiblings: getElementSiblings,
    getKeyOfValue: getKeyOfValue
  };
})(undefined);