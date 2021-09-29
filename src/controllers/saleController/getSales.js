// Importando el modelo Sale
const { Sale } = require('../../models/Sales');

// Listar ventas
const getSales = async(req, res) => {
    try {
        const allSales = await Sale.findAll();

        if (allSales.length > 0) {
            return res.json({
                data: allSales
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

module.exports = { getSales };