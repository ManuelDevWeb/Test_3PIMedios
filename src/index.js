/* Inicialización del Servidor */

const app = require('./app');

// Variables de entorno
require('dotenv').config();
const PORT = process.env.PORT || 3080;

async function main() {
    await app.listen(PORT);
    console.log(`Server running in port ${PORT}`);
}

main();