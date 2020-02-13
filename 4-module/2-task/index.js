/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
  let i = 0;
  let trs = table.querySelectorAll('tr');
  for (let tr of trs) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
    i++;
  }
}
