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

const path = require('path');

const path = require('path');

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, '../user/build')));

// Capturar cualquier ruta no manejada por el backend y devolver el index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../user/build/index.html'));
});


module.exports = app;
