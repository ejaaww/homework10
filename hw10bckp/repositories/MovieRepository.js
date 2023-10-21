const { Movie } = require('../models/movie');

class MovieRepository {
  // Create a new movie
  async createMovie(data) {
    try {
      const movie = await Movie.create(data);
      return movie;
    } catch (error) {
      throw error;
    }
  }

  // Get all movies
  async getAllMovies() {
    try {
      const movies = await Movie.findAll();
      return movies;
    } catch (error) {
      throw error;
    }
  }

  // Get a movie by ID
  async getMovieById(id) {
    try {
      const movie = await Movie.findByPk(id);
      if (!movie) {
        throw new Error('Movie not found');
      }
      return movie;
    } catch (error) {
      throw error;
    }
  }

  // Update a movie by ID
  async updateMovie(id, data) {
    try {
      const movie = await Movie.findByPk(id);
      if (!movie) {
        throw new Error('Movie not found');
      }
      await movie.update(data);
      return movie;
    } catch (error) {
      throw error;
    }
  }

  // Delete a movie by ID
  async deleteMovie(id) {
    try {
      const movie = await Movie.findByPk(id);
      if (!movie) {
        throw new Error('Movie not found');
      }
      await movie.destroy();
    } catch (error) {
      throw error;
    }
  }
}

module.exports =  MovieRepository;


