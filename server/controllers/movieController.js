const Movie = require('../models/Movie');

exports.createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        res.status(201).json(movie);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getMovies = async (req, res) => {
    const movie = await Movie.find();
    res.json(movie);
};

exports.getMovieById = async (req, res) => {
    const movie = await Movie.findById(req.params.id);
    movie ? res.json(movie) : res.status(404).json({ error: 'Pelicula no encontrada' });
}

exports.updateMovie = async (req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    movie ? res.json(movie) : res.status(404).json({ error: 'Pelicula no encontrada' });
};

exports.deleteMovie = async (req, res) => {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    movie ? res.json({ message: 'Pelicula eliminada' }) : res.status(404).json({ error: 'Pelicula no encontrada' });
};