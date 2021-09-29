// Importando el modelo Sale
const { Sale } = require('../../models/Sales');

// Crear ventas
const createSale = async(req, res) => {
    const { id, products_id, qty, sale_at, users_id } = req.body;

    try {
        let newSale = await Sale.create({
            id,
            products_id,
            qty,
            sale_at,
            users_id
        }, {
            fields: ['id', 'products_id', 'qty', 'sale_at', 'users_id']
        });

        if (newSale) {
            return res.json({
                message: 'Sale created',
                data: newSale
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

module.exports = { createSale };