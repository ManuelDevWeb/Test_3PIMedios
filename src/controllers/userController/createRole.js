// Importando el modelo Role
const { Role } = require('../../models/Role');

// Create Role
const createRole = async(req, res) => {
    const { id, name } = req.body;

    try {
        let newRole = await Role.create({
            id,
            name
        }, {
            fields: ['id', 'name']
        });

        if (newRole) {
            return res.json({
                message: 'Role created',
                data: newRole
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ups, there was an error',
            data: {}
        })
    }
}

module.exports = { createRole }