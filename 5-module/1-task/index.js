/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let elements = table.querySelectorAll('tbody > tr');
  for (let elem of elements) {
    if (!elem.lastElementChild.dataset.available) {
      elem.setAttribute('hidden', true);
    } else if (elem.lastElementChild.dataset.available === 'true') {
      elem.classList.add('available');
    } else if (elem.lastElementChild.dataset.available === 'false') {
      elem.classList.add('unavailable');
    }
    if (elem.children[2].innerHTML === 'm') {
      elem.classList.add('male');
    }
    if (elem.children[2].innerHTML === 'f') {
      elem.classList.add('female');
    }
    if (elem.children[1].innerHTML < 18) {
      elem.style.textDecoration = 'line-through';
    }
  }
}
