/* Inicialización del Servidor */

const app = require('./app');

// Variables de entorno
require('dotenv').config();
const PORT = process.env.PORT || 3080;

async function runServer() {
    await app.listen(PORT);
    console.log(`Server running in port ${PORT}`);
}

runServer();