import request from '../helper/request.js';

export default {
  async fetchCarousel () {
    try {
      const result = await request.get('/movie/upcoming')
      return result ? result.results.splice(5, 6) : [];
    } catch (error) {
      console.error(error.message)
    }
  },

  async fetchTopRatedMovies () {
    try {
      const result = await request.get('/movie/top_rated')
      return result ? result.results.splice(3, 4) : [];
    } catch (error) {
      console.error(error.message)
    }
  },

  async fetchPopularMovies () {
    try {
      const result = await request.get('/movie/popular')
      return result ? result.results.splice(7, 8) : [];
    } catch (error) {
      console.error(error.message)
    }
  },

  async fetchMovies () {
    try {
      const result = await request.get('/movie/popular')
      return result.results;
    } catch (error) {
      console.error(error.message)
    }
  },

  async detail (movieId) {
    try {
      if (!movieId) throw Error('Movie ID cannot empty')
      return await request.get(`/movie/${movieId}`)
    } catch (error) {
      console.error(error.message)
    }
  },

  async searchMovies (query) {
    try {
      if (query) {
        const result = await request.get('/search/movie', { params: { query } })
        return result.results
      } else {
        return []
      }
    } catch (error) {
      console.error(error.message)
    }
  }
}