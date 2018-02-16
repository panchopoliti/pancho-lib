(function (root) {

  function onlyToggle(trigger, target) {
    trigger.addEventListener('click', () => {
      target.classList.toggle('hide');
    });
  }

  function clickOutside(trigger, target) {
    document.body.addEventListener('click', (event) => {
      if (event.target !== trigger) {
        target.classList.add('hide');
      }
    });
  }

  function genericToggle() {
    const allToggleTriggers = document.querySelectorAll('[data-toggle]');

    for (const trigger of allToggleTriggers) {
      const toggleValue = trigger.dataset.toggle;
      const targetString = trigger.getAttribute('data-target');
      const target = document.getElementById(targetString);

      if (toggleValue === 'onlyToggle') {
        onlyToggle(trigger, target);
      } else if (toggleValue === 'clickOutside') {
        onlyToggle(trigger, target);
        clickOutside(trigger, target);
      } else {
        throw new Error(`${toggleValue} is not an available data-toggle value`);
      }
    }
  }

  root.toggle = {
    genericToggle,
  };
}(window));
