(function (root) {

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
      default:
        throw new Error(`${toggleValue} is not an available data-toggle value`);
    }
  }

  function genericToggle() {
    const allToggleElem = document.querySelectorAll('[data-toggle]');
    for (const elem of allToggleElem) {
      const { target, toggle } = elem.dataset;

      if (!target) {
        throw new Error('not data-target provided');
      }

      executeToggle(elem, target, toggle);
    }
  }

  root.toggle = {
    genericToggle,
  };
}(window));

