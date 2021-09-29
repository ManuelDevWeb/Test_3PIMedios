// Importando el modelo Producto
const { User } = require('../../models/Users');

// Eliminar usuario
const deleteUser = async(req, res) => {
    const { id } = req.params;

    try {
        const infoUser = await User.findOne({
            where: {
                id
            }
        })

        const userDelete = await User.destroy({
            where: {
                id
            }
        })


        if (userDelete) {
            console.log(userDelete);
            return res.json({
                message: `User deleted`,
                data: {
                    name: infoUser.name,
                    document: infoUser.document
                }
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

module.exports = { deleteUser };