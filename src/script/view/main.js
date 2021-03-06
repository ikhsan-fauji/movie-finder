import { detail, detailMovie } from './detail.js';
// importing component
import * as $ from 'jquery';
import '../component/Carousel.js';
import '../component/MoviePreview.js';

// importing
import moviesData from '../data/movies-data.js';

const main = async () => {
  try {
    $('#dynamic-content').hide()
    $('#movies').hide()
    $('#detail-movie').hide()

    await carousel()
    await topratedMovies()
    await popularMovies()
    await movieList()
  } catch (error) {
    console.error(error.message)
  }
};

const movieList = async () => {
  try {
    const details = document.querySelectorAll('.movie-link');
    for (const detail of details) {
      detail.addEventListener('click', () => {
        $('#home-content').hide()
        $('#dynamic-content').show()
        $('#movies').show()
      })
    }

    const topRatedPreviewElement = document.querySelector('.movie-list');
    const resultList = await moviesData.fetchMovies()

    resultList.forEach(movie => {
      const gridElement = document.createElement("div")
      gridElement.setAttribute("class", "col-sm-6 col-md-3")

      const movieElement = document.createElement('e-movie-preview')
      movieElement.movie = movie

      gridElement.appendChild(movieElement)
      topRatedPreviewElement.appendChild(gridElement)
    });
    detail(detailMovie)
  } catch (error) {
    console.error(error.message)
  }
}

/* Home Content */
const carousel = async () => {
  try {
    const carouselElement = document.querySelector('e-carousel')
    const resultList = await moviesData.fetchCarousel()
    carouselElement.carouselList = resultList
    detail(detailMovie)
  } catch (error) {
    console.error(error.message)
  }
}

const topratedMovies = async () => {
  try {
    const topRatedPreviewElement = document.querySelector('.top-rated-preview');
    const resultList = await moviesData.fetchTopRatedMovies()

    resultList.forEach(movie => {
      const gridElement = document.createElement("div")
      gridElement.setAttribute("class", "col-sm-6 col-md-3")

      const movieElement = document.createElement('e-movie-preview')
      movieElement.movie = movie

      gridElement.appendChild(movieElement)
      topRatedPreviewElement.appendChild(gridElement)
    });
    detail(detailMovie)
  } catch (error) {
    console.error(error.message)
  }
}

const popularMovies = async () => {
  try {
    const popularPreviewElement = document.querySelector('.popular-preview');
    const resultList = await moviesData.fetchPopularMovies()

    resultList.forEach(movie => {
      const gridElement = document.createElement("div")
      gridElement.setAttribute("class", "col-sm-6 col-md-3")

      const movieElement = document.createElement('e-movie-preview')
      movieElement.movie = movie

      gridElement.appendChild(movieElement)
      popularPreviewElement.appendChild(gridElement)
    });
    detail(detailMovie)
  } catch (error) {
    console.error(error.message)
  }
}

export default main;