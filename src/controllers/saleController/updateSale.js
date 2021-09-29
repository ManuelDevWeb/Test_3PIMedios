// Importando el modelo Sale
const { Sale } = require('../../models/Sales');

// Actualizar venta
const updateSale = async(req, res) => {
    const { id } = req.params;
    const { products_id, qty, sale_at, users_id } = req.body;

    try {
        const sale = await Sale.findOne({
            where: {
                id
            }
        });

        const updateSale = await Sale.update({
            products_id,
            qty,
            sale_at,
            users_id
        }, {
            where: { id }
        });

        return res.json({
            message: 'sale updated!',
            saleToUpdate: sale,
            updateSale
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Ups, there was an error',
            data: {}
        })
    }
}

module.exports = { updateSale };