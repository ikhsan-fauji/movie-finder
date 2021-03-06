import 'regenerator-runtime';
import * as $ from 'jquery';
import 'popper.js';
import 'bootstrap';
import './styles/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import main from './script/view/main.js';
import searchMovies from './script/view/search.js';

document.addEventListener("DOMContentLoaded", main);

$(document).ready(() => {
  $('.carousel').carousel({
    interval: 1500
  })

  $('.btn-search').click(() => {
    searchMovies($('.search-input').val())
  })
})