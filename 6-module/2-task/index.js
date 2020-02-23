'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    let div = document.createElement('div');
    div.classList.add("main-carousel");
    div.classList.add("carousel");
    div.classList.add("slide");
    div.setAttribute("id", "mainCarousel");
    div.innerHTML = `<ol class="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="1" class="carousel-indicator"></li>
        <li data-target="#mainCarousel" data-slide-to="2" class="carousel-indicator"></li>
    </ol>
    <div class="carousel-inner">
    </div>
    <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>`;
    this.el.append(div);

    let number = 0;

    let inner = div.querySelector('.carousel-inner');
    inner.insertAdjacentHTML('afterBegin', this.carousel(number));

    this.el.addEventListener('click', function(event) {
      if (!event.target.dataset.slide) {return;}
      if (event.target.className === "carousel-control-next") {
        if (number > 1) {
          number = -1;
        }
        number += 1;
      } else if (event.target.className === "carousel-control-prev") {
        if (number < 1) {
          number = 3;
        }
        number -= 1;
      }
    });

    this.el.addEventListener('click', () => inner.innerHTML = this.carousel(number));
    this.el.addEventListener('click', () => activeNew(number));

    let indicators = this.el.querySelector('.carousel-indicators');
    indicators.onclick = function(event) {
      if (event.target.tagName !== 'LI') return;
      number = +event.target.dataset.slideTo;
    };
    indicators.addEventListener('click', () => inner.innerHTML = this.carousel(number));

    let selectedLi = indicators.querySelector(`*[data-slide-to="${number}"]`);
    selectedLi.classList.add('active');

    function activeNew(numberOfSlide) {
      selectedLi.classList.remove('active');
      selectedLi = indicators.querySelector(`*[data-slide-to="${numberOfSlide}"]`);
      selectedLi.classList.add('active');
    }
  }

  carousel(numberOfSlide) {
    return `<div class="carousel-item active">
            <img src="${this.slides[numberOfSlide].img}" alt="Activelide">
            <div class="container">
            <div class="carousel-caption">
            <h3 class="h1">${this.slides[numberOfSlide].title}</h3>
            <div>
                <a class="btn" href="#" role="button">
                    View all DEALS
                    <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
            </div>
        </div>
    </div>
    </div>`;
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
