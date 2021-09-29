// Importando el modelo Producto
const { Product } = require('../../models/Product');

// Crear productos
const createProduct = async(req, res) => {
    const { id, name, description, price } = req.body;

    try {
        let newProduct = await Product.create({
            id,
            name,
            description,
            price
        }, {
            fields: ['id', 'name', 'description', 'price']
        });

        if (newProduct) {
            return res.json({
                message: 'Product created',
                data: newProduct
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

module.exports = { createProduct };