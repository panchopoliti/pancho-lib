(function (root) {
  const arraysLib = root.arraysLib;

  function closeModal(modalDiv) {
    const overlay = document.getElementById('overlayDivToggle');
    overlay.classList.add('hide');
    modalDiv.classList.add('hide');
  }

  function getAllModalTriggers() {
    const resultArr = [];
    const triggerArr = document.querySelectorAll('[data-toggle]');
    for (const trigger of triggerArr) {
      if (trigger.dataset.toggle === 'myModal') {
        resultArr.push(trigger);
      }
    }
    return resultArr;
  }

  function onlyToggle(trigger, target) {
    trigger.addEventListener('click', () => {
      target.classList.toggle('hide');
    });
  }

  function clickOutside(trigger, targetSelector, target) {


    document.body.addEventListener('click', (event) => {
      const isChildOfDataTarget = event.target.closest(targetSelector);

      if (event.target !== trigger && !isChildOfDataTarget) {
        target.classList.add('hide');
      }
    });
  }


  // It works if you put to overlay div the id "overlayDivToggle" and the target being the Div Alert
  function myModal(trigger, target, targetSelector) {
    const overlayDiv = document.getElementById('overlayDivToggle');
    document.addEventListener('click', (event) => {
      const triggers = getAllModalTriggers();
      const isChildOfDataTarget = event.target.closest(targetSelector);
      const isEventTargetATrigger = arraysLib.contains(triggers, event.target); //that means i want to open the modal, not to close it
      const isDataTargetHidden = target.classList.contains('hide');

      if (event.target !== target && !isEventTargetATrigger && !isChildOfDataTarget && !isDataTargetHidden) {
        closeModal(target);
      }
    });
    trigger.addEventListener('click', () => {
      target.classList.remove('hide');
      overlayDiv.classList.remove('hide');
    });
  }

  function executeToggle(trigger, targetSelector, toggleValue) {
    const target = document.querySelector(targetSelector);

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
        throw new Error(`${toggleValue} is not an available data-toggle value`);
    }
  }

  function genericToggle() {
    const allToggleElem = document.querySelectorAll('[data-toggle]');
    for (const elem of allToggleElem) {
      const { target, toggle} = elem.dataset;

      if (!target) {
        throw new Error('not data-target provided');
      }

      executeToggle(elem, target, toggle);
    }
  }

  root.toggle = {
    genericToggle,
    closeModal,
  };
}(window));

