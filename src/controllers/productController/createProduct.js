// Crear productos
const createProduct = async(req, res) => {
    console.log(req.body);
    res.send('Received');
}

module.exports = { createProduct };