import app from '../enums.js';
import * as $ from 'jquery';
import moviesData from '../data/movies-data.js';

const detail = (callback) => {
  const details = document.querySelectorAll('.btn-detail');
  for (const detail of details) {
    detail.addEventListener('click', () => {
      callback(detail.dataset.id);
    })
  }
}

const detailMovie = async (movieId) => {
  try {
    $('#home-content').hide()
    $('#dynamic-content').show()
    $('#movies').hide()
    $('#detail-movie').show()
    const movie = await moviesData.detail(movieId)
    const img = document.querySelector('#movie-img')
    img.setAttribute("src", `${app.IMAGE_URL}${movie.backdrop_path}`)
    document.querySelector('#movie-title').innerHTML = movie.title
    document.querySelector('#movie-overview').innerHTML = movie.overview
    document.querySelector('#movie-review').innerHTML = movie.vote_count + ' Reviews'
  } catch (error) {
    console.error(error.message)
  }
}

export {
  detail,
  detailMovie
}