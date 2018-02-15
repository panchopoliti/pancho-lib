(function (root) {
  function toggleElement() {
    const allToggleTriggers = document.querySelectorAll('[data-toggle]');

    for (const trigger of allToggleTriggers) {
      const targetString = trigger.getAttribute('[data-target]');
      const target = document.getElementById(targetString);
      trigger.addEventListener('click', () => {
        target.classList.toggle('hide');
      });

      document.body.addEventListener('click', (event) => {

      if (event.target !== trigger) {
        target.classList.add('hide');
      }

      });
    }
  toggleElement();

  root.toggle = {
    toggleElement,
  }
}(window));
