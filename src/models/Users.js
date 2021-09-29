const { DBConnect } = require('../db');
const Sequelize = require('sequelize');

// Importando modelo Sales
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

User.hasMany(Sale, { foreingKey: 'users_id', sourceKey: 'id' });
Sale.belongsTo(User, { foreingKey: 'users_id', sourceKey: 'id' });

module.exports = { User };