const { pool } = require('../../../db/index');

// Listar productos
const getProducts = async(req, res) => {
    const response = await pool.query('SELECT * FROM products');
    res.status(200).json(response.rows);
}

module.exports = { getProducts };