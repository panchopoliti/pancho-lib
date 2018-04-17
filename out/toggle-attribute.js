'use strict';

(function (root) {
  var arraysLib = root.arraysLib;

  function closeModal(modalDiv) {
    var overlay = document.getElementById('overlayDivToggle');
    overlay.classList.add('hide');
    modalDiv.classList.add('hide');
  }

  function getAllModalTriggers() {
    var resultArr = [];
    var triggerArr = document.querySelectorAll('[data-toggle]');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = triggerArr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var trigger = _step.value;

        if (trigger.dataset.toggle === 'myModal') {
          resultArr.push(trigger);
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

    return resultArr;
  }

  function onlyToggle(trigger, target) {
    trigger.addEventListener('click', function () {
      target.classList.toggle('hide');
    });
  }

  function clickOutside(trigger, targetSelector, target) {

    document.body.addEventListener('click', function (event) {
      var isChildOfDataTarget = event.target.closest(targetSelector);

      if (event.target !== trigger && !isChildOfDataTarget) {
        target.classList.add('hide');
      }
    });
  }

  // It works if you put to overlay div the id "overlayDivToggle" and the target being the Div Alert
  function myModal(trigger, target, targetSelector) {
    var overlayDiv = document.getElementById('overlayDivToggle');
    document.addEventListener('click', function (event) {
      var triggers = getAllModalTriggers();
      var isChildOfDataTarget = event.target.closest(targetSelector);
      var isEventTargetATrigger = arraysLib.contains(triggers, event.target); //that means i want to open the modal, not to close it
      var isDataTargetHidden = target.classList.contains('hide');

      if (event.target !== target && !isEventTargetATrigger && !isChildOfDataTarget && !isDataTargetHidden) {
        closeModal(target);
      }
    });
    trigger.addEventListener('click', function () {
      target.classList.remove('hide');
      overlayDiv.classList.remove('hide');
    });
  }

  function executeToggle(trigger, targetSelector, toggleValue) {
    var target = document.querySelector(targetSelector);

    switch (toggleValue) {
      case 'onlyToggle':
        onlyToggle(trigger, target);
        break;
      case 'clickOutside':
        onlyToggle(trigger, target);
        clickOutside(trigger, targetSelector, target);
        break;
      case 'myModal':
        myModal(trigger, target, targetSelector);
        break;
      default:
        throw new Error(toggleValue + ' is not an available data-toggle value');
    }
  }

  function genericToggle() {
    var allToggleElem = document.querySelectorAll('[data-toggle]');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = allToggleElem[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var elem = _step2.value;
        var _elem$dataset = elem.dataset,
            target = _elem$dataset.target,
            toggle = _elem$dataset.toggle;


        if (!target) {
          throw new Error('not data-target provided');
        }

        executeToggle(elem, target, toggle);
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

  root.toggle = {
    genericToggle: genericToggle,
    closeModal: closeModal
  };
})(window);