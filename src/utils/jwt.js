const jwt = require('jsonwebtoken');

const jwtTokens = (document, id, last_name, name, roles_id) => {
    const user = { document, id, last_name, name, roles_id };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1m' });
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '3m' });

    return ({ accessToken, refreshToken });
}

module.exports = { jwtTokens };