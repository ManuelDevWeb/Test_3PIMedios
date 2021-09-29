const { DBConnect } = require('../db');
const Sequelize = require('sequelize');


const Sale = DBConnect.define('sales', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    products_id: {
        type: Sequelize.UUID
    },
    qty: {
        type: Sequelize.INTEGER
    },
    sale_at: {
        type: Sequelize.DATE
    },
    users_id: {
        type: Sequelize.UUID
    }
});

module.exports = { Sale };