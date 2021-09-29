const { DBConnect } = require('../db');
const Sequelize = require('sequelize');

// Importando modelo Sale
const { Sale } = require('./Sales');

const User = DBConnect.define('users', {
    document: {
        type: Sequelize.TEXT
    },
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    last_name: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.TEXT
    },
    roles_id: {
        type: Sequelize.UUID
    }
}, {
    timestamps: false
});

// Relacion con Sales
User.hasMany(Sale, { foreignKey: "users_id" });
Sale.belongsTo(User);

module.exports = { User };