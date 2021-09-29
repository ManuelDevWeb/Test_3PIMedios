const { DBConnect } = require('../../db');
const Sequelize = require('sequelize');

// Importando modelo Sales
const { Sale } = require('./Sales');

// Modelo Product
const Product = DBConnect.define('products', {
    description: {
        type: Sequelize.TEXT
    },
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    },
    price: {
        type: Sequelize.INTEGER
    }
});

Product.hasMany(Sale, { foreingKey: 'products_id', sourceKey: 'id' });
Sale.belongsTo(Product, { foreingKey: 'products_id', sourceKey: 'id' });

module.exports = { Product };