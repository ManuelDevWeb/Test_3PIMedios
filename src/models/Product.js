const { DBConnect } = require('../db');
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
}, {
    timestamps: false
});

// Relacion con Sales
Product.hasMany(Sale, { foreignKey: "products_id" });
Sale.belongsTo(Product);

module.exports = { Product };