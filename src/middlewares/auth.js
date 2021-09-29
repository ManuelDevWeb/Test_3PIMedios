const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    //Bearer TOKEN
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
        return res.status(401).json({
            error: "Token void"
        });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) {
            return res.status(403).json({
                error: error.message
            });
        }

        res.user = user;
        next();
    })
}

module.exports = { authenticateToken };