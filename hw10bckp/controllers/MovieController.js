const Movie = require('../repositories/MovieRepository');

class MovieController {
  static getAllMovies(req, res) {
    Movie.findAll()
      .then(movies => {
        res.json(movies);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  }

  static getMovieById(req, res) {
    const id = req.params.id;
    Movie.findById(id)
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  }

  static createMovie(req, res) {
    const movie = req.body;
    Movie.create(movie)
      .then(movie => {
        res.json(movie);
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  }

  static updateMovie(req, res) {
    const id = req.params.id;
    const movie = req.body;
    Movie.update(id, movie)
      .then(() => {
        res.json({ message: 'Movie updated successfully' });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  }

  static deleteMovie(req, res) {
    const id = req.params.id;
    Movie.delete(id)
      .then(() => {
        res.json({ message: 'Movie deleted successfully' });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  }
}

module.exports = MovieController;
