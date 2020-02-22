/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
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
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;
    this.el.classList.add("pure-table");
    let thead = document.createElement('thead');
    this.el.appendChild(thead);
    this.el.tHead.innerHTML = `<tr>
            <td>Name</td>
            <td>Age</td>
            <td>Salary</td>
            <td>City</td>
            <td></td>
        </tr>`;
    let tbody = document.createElement('tbody');
    this.el.appendChild(tbody);
    for (let item of this.data) {
      let tr = document.createElement('tr');
      tr.setAttribute("id", item.id)
      tr.innerHTML = `<tr>
                              <td>${item.name}</td>
                              <td>${item.age}</td>
                              <td>${item.salary}</td>
                              <td>${item.city}</td>
                              <td><a href="#delete">X</a></td>
                            </tr>`;
      tbody.append(tr);
    }
    let id;

    this.el.addEventListener('click', function(event) {
      if (event.target.tagName !== 'A') return;
      let pane = event.target.closest('tr');
      id = +pane.id;
      pane.remove();
    });
    this.el.addEventListener('click', () => this.onRemoved(id));
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {}
}

window.ClearedTable = ClearedTable;
