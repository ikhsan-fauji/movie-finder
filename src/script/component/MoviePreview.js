import app from '../enums.js';

class MoviePreview extends HTMLElement {
  constructor () {
    super()
  }

  set movie (movie) {
    this._movie = movie
    this.render()
  }

  render () {
    this.innerHTML = `
    <div class="card preview-card">
      <img class="card-img-top" src="${app.IMAGE_URL}${this._movie.poster_path}" alt="${this._movie.title}">
      <div class="card-body">
        <h5 class="card-title">${this._movie.title}</h5>
        <p class="card-text preview-description">${this._movie.overview.substring(0, 150)}...</p>

        <div class="rating">
          <i class="fa fa-star"></i>
          &nbsp;
          <span>${this._movie.vote_count} Reviewers</span>
        </div>

        <a href="#" class="btn btn-primary btn-sm btn-detail" data-id="${this._movie.id}">Detail</a>
      </div>
    </div>
    `;
  }
}

customElements.define("e-movie-preview", MoviePreview)