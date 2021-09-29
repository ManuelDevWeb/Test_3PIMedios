// Importando el modelo User
const { User } = require('../../models/Users');

// Listar usuarios
const getUsers = async(req, res) => {
    try {
        const allUsers = await User.findAll();

        if (allUsers.length > 0) {
            return res.json({
                data: allUsers
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

module.exports = { getUsers }