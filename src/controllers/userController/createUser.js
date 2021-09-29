// Importando el modelo User
const { User } = require('../../models/Users');

// Crear usuarios
const createUser = async(req, res) => {
    const { document, id, last_name, name, roles_id } = req.body;

    try {
        let newUser = await User.create({
            document,
            id,
            last_name,
            name,
            roles_id
        }, {
            fields: ['document', 'id', 'last_name', 'name', 'roles_id']
        });

        if (newUser) {
            return res.json({
                message: 'User created',
                data: newUser
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

module.exports = { createUser };