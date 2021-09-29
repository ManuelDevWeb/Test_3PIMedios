// Importando el modelo Sale
const { Sale } = require('../../models/Sales');

// Eliminar venta
const deleteSale = async(req, res) => {
    const { id } = req.params;

    try {
        const infoSale = await Sale.findOne({
            where: {
                id
            }
        })

        const saleDelete = await Sale.destroy({
            where: {
                id
            }
        })


        if (saleDelete) {
            return res.json({
                message: `Sale deleted`,
                data: {
                    id: infoSale.id,
                    name: infoSale.name,
                    qty: infoSale.qty
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

module.exports = { deleteSale };