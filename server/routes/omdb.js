const express = require('express');
const fetch = require('node-fetch').default;
const router = express.Router();

const OMDB_API_KEY = process.env.OMDB_API_KEY;


router.get('/image', async (req, res) => {
    const { IMDbID } = req.query;
    if (!IMDbID) return res.status(400).json({ error: 'IMDbID requerido' });

    try {
        const response = await fetch(`https://www.omdbapi.com/?i=${IMDbID}&apikey=${OMDB_API_KEY}`);
        const data = await response.json();

        if (data.Response === 'True') {
            res.json({ poster: data.Poster });
        } else {
            res.status(404).json({ error: 'Película no encontrada en OMDb' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al consultar OMDb' });
    }
});

module.exports = router;
