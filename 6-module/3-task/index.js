'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">

       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>

      </ul>
    </li>

    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">

       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>

       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>

      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.template;
    let backdrop = document.querySelector('.backdrop');

    this.el.addEventListener('pointerenter', function(event) {
      if (!event.target.classList.contains("list-group-item")) return;
      event.target.lastElementChild.classList.add('show');
      backdrop.classList.add('show');
    }, true);

    this.el.addEventListener('pointerleave', function(event) {
      if (!event.target.classList.contains("list-group-item")) return;
      event.target.lastElementChild.classList.remove('show');
      backdrop.classList.remove('show');
    }, true);
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;
