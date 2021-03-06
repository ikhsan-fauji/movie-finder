import { detail, detailMovie } from './detail.js';
import * as $ from 'jquery';
import '../component/MoviePreview.js';

// importing data
import moviesData from '../data/movies-data.js';

const searchMovies = async (query) => {
  try {
    if (query) {
      $('#home-content').hide()
      $('#dynamic-content').show()
      $('#movies').show()
      $('#detail-movie').hide()

      const topRatedPreviewElement = document.querySelector('.movie-list');
      topRatedPreviewElement.innerHTML = ``;
      const resultList = await moviesData.searchMovies(query)

      resultList.forEach(movie => {
        const gridElement = document.createElement("div")
        gridElement.setAttribute("class", "col-md-3")

        const movieElement = document.createElement('e-movie-preview')
        movieElement.movie = movie

        gridElement.appendChild(movieElement)
        topRatedPreviewElement.appendChild(gridElement)
      });
      detail(detailMovie)
    } else {
      $('#home-content').show()
      $('#dynamic-content').hide()
      $('#movies').hide()
    }
  } catch (error) {
    console.error(error.message)
  }
}

export default searchMovies;