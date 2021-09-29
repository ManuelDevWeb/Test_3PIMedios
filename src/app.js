/* Configuración del Servidor */

const express = require('express');
const morgan = require('morgan');

const productRoutes = require('./routes/products');
const loginRoutes = require('./routes/login');
const userRoutes = require('./routes/users');
const saleRoutes = require('./routes/sales');

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
app.use('/api/v1/', loginRoutes);
app.use('/api/v1/', userRoutes);
app.use('/api/v1/', saleRoutes);

module.exports = app;