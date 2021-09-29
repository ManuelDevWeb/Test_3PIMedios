// Importando el modelo Producto
const { User } = require('../../models/Users');

// Update or assing role 
const roleUser = async(req, res) => {
    const { id } = req.params;
    const { roles_id } = req.body;

    try {
        const user = await User.findOne({
            where: {
                id
            }
        });

        if (user) {
            await User.update({
                roles_id
            }, {
                where: { roles_id }
            });
            return res.json({
                message: 'correctly assigned role',
                userUpdate: {
                    name: user.name,
                    document: user.document
                }
            })
        } else {
            return res.json({
                message: 'User not exist'
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

module.exports = { roleUser };