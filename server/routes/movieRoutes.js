// Rutas de los métodos para el manejo de la BD

const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const OMDB_API_KEY = process.env.OMDB_API_KEY;
const {createMovie, getMovies, getMovieById, updateMovie, deleteMovie} = require('../controllers/movieController');

router.post('/', createMovie);
router.get('/', getMovies);
router.get('/:id', getMovieById);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;