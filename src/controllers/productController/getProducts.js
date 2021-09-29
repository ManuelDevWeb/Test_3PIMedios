// Importando el modelo Producto
const { Product } = require('../../models/Product');

// Listar productos
const getProducts = async(req, res) => {
    try {
        const allProducts = await Product.findAll();

        if (allProducts.length > 0) {
            return res.json({
                data: allProducts
            })
        }
    } catch (error) {
        res.status(500).json({
            message: 'Ups, there was an error',
            data: {}
        })
    }
}

module.exports = { getProducts };