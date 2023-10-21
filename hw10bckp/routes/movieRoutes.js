const express = require('express');
const MovieController = require('../controllers/MovieController');
const multer = require('multer');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Define API endpoints for CRUD operations
router.get('movies/', MovieController.getAllMovies);
router.get('movies/:id', MovieController.getMovieById);
router.post('movies/', upload.single('poster'), MovieController.createMovie);
router.put('movies/:id', MovieController.updateMovie);
router.delete('movies/:id', MovieController.deleteMovie);

module.exports = router;
