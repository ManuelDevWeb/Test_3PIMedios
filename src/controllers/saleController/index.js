const { getSales } = require('./getSales');
const { createSale } = require('./createSale');
const { deleteSale } = require('./deleteSale');
const { updateSale } = require('./updateSale');

module.exports = {
    getSales,
    createSale,
    deleteSale,
    updateSale
}