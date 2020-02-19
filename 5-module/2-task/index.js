/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
function SortableTable(items) {
  /**
   * @property {Element} - обязательно свойство, которое ссылается на элемент <table>
   */
  this.el = document.createElement('table');
  let thead = document.createElement('thead');
  this.el.appendChild(thead);
  this.el.tHead.innerHTML = `<tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
        </tr>`;
  let tbody = document.createElement('tbody');
  this.el.appendChild(tbody);
  for (item of items) {
    let tr = document.createElement('tr');
    tr.innerHTML = `<tr>
                              <td>${item.name}</td>
                              <td>${item.age}</td>
                              <td>${item.salary}</td>
                              <td>${item.city}</td>
                            </tr>`;
    tbody.append(tr);
  }
  /**
   * Метод выполняет сортировку таблицы
   * @param {number} column - номер колонки, по которой
   * нужно выполнить сортировку (отсчет начинается от 0)
   * @param {boolean} desc - признак того, что сортировка должна идти в обратном порядке
   */
  this.sort = (column, desc = false) => {
    let sortedRows = Array.from(tbody.rows).sort((rowA, rowB) => {
      if (!desc) {
        if (!isNaN(+rowA.cells[column].innerHTML)) {
          return +rowA.cells[column].innerHTML > +rowB.cells[column].innerHTML ? 1 : -1;
        }
        return rowA.cells[column].innerHTML > rowB.cells[column].innerHTML ? 1 : -1;
      } else {
        if (!isNaN(+rowA.cells[column].innerHTML)) {
          return +rowA.cells[column].innerHTML < +rowB.cells[column].innerHTML ? 1 : -1;
        }
        return rowA.cells[column].innerHTML < rowB.cells[column].innerHTML ? 1 : -1;
      }
    });
    tbody.append(...sortedRows);
  };
}
