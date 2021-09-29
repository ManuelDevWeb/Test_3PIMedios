/* Configuración del Servidor */

const express = require('express');
const morgan = require('morgan');

// Importando rutas
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/users');

// Inicializando servidor
const app = express();

// Middlewares
// Leer json
app.use(express.json());
// Ver por consola las peticiones que llegan
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use('/api/v1/', productRoutes);
app.use('/api/v1/', userRoutes);

module.exports = app;