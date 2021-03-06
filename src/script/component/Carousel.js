
import app from '../enums.js';

class Carousel extends HTMLElement {
  constructor () {
    super();
    this._carouselList = [];
  }

  connectedCallback () {
    this.render();
  }

  set carouselList (carouselList = []) {
    this._carouselList = carouselList;
    this.render();
  }

  render () {
    let element = `<div id="upComing" class="carousel slide" data-ride="carousel">`;
    element += this.carouselSelector(this._carouselList)
    element += this.carouselItem(this._carouselList)

    element += `
      <a class="carousel-control-prev" href="#upComing" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#upComing" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>

      <div class="carousel-overlay"></div>
    </div>
    `;
    this.innerHTML = element
  }

  carouselItem (carouselList = []) {
    let elements = `<div class="carousel-inner">`;
    if (carouselList.length > 0) {
      carouselList.forEach((carousel, index) => {
        elements += `
          <div class="carousel-item${index == 0 ? ' active' : ''}">
            <img src="${app.IMAGE_URL}${carousel.backdrop_path}" alt="${carousel.title}">
            <div class="carousel-caption">
              <h1>${carousel.title}</h1>
              <p>${carousel.overview.substring(0, 200) + ' ...'}</p>

              <div class="rating">
                <i class="fa fa-star"></i>
                &nbsp;
                <span>${carousel.vote_count} Reviewers</span>
              </div>

              <button class="btn btn-primary btn-detail" data-id="${carousel.id}">Detail</button>
            </div>
          </div>
        `;
      })
    } else {
      elements += `
          <div class="carousel-item active">
            <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg" alt="TMDB">
            <div class="carousel-caption">
              <h5>Default Carousel</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laboriosam dolor atque itaque commodi deleniti dolore omnis</p>
            </div>
          </div>
        `;
    }
    elements += `</div>`;
    return elements;
  }

  carouselSelector (carouselList = []) {
    let elements = `<ol class="carousel-indicators">`;
    if (carouselList.length > 0) {
      carouselList.forEach((carousel, index) => {
        elements += `<li data-target="#upComing" data-slide-to="${index}"${index == 0 ? 'class="active"' : ''}></li>`;
      })
    } else {
      elements += `<li data-target="#upComing" data-slide-to="0" class="active"></li>`;
    }
    elements += `</ol>`;
    return elements;
  }
}

customElements.define("e-carousel", Carousel)