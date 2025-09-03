// Configuración de express, CORS y rutas

const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');
const omdbRoutes = require('./routes/omdb');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/movies', movieRoutes);
app.use('/api/omdb', omdbRoutes);

module.exports = app;
