// Arranque del servidor y conexion a la base de datos

require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})