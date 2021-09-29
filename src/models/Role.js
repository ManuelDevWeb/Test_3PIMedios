const { DBConnect } = require('../../db');
const Sequelize = require('sequelize');

// Importando modelo User
const { User } = require('./Users');

// Modelo Role
const Role = DBConnect.define('roles', {
    id: {
        type: Sequelize.UUID,
        primaryKey: true
    },
    name: {
        type: Sequelize.TEXT
    }
});

Role.hasMany(User, { foreingKey: 'roles_id', sourceKey: 'id' });
User.belongsTo(Role, { foreingKey: 'roles_id', sourceKey: 'id' });

module.exports = { Role };