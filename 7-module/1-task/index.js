/**
 * promiseClick
 * @param {Element} button index
 * @returns {Promise}
 */

function promiseClick(button) {
  this.button = button;
  return new Promise((resolve) => {
    this.button.addEventListener('click', (event) => {
      resolve(event);
    }, { once: true });
  });
}
