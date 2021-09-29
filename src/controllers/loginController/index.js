const { jwtTokens } = require('../../utils/jwt');

const { User } = require('../../models/Users');

const login = async(req, res) => {
    const { document } = req.body;

    try {
        const user = await User.findOne({
            where: {
                document: document
            }
        });

        if (user.lenght === 0) {
            return res.status(401).json({
                error: `User with document ${document}  not exist`
            })
        } else {
            // console.log(user)
            res.status(200).json({
                message: "success"
            })
        }

        //jwt
        let tokens = jwtTokens(user.rows[0]);
        res.cookie('refresh_token', tokens.refreshToken, { httpOnly: true })
        res.json(tokens);

    } catch (error) {
        console.log(error);
        res.status(401).json({
            message: 'Ups, there was an error',
            data: {}
        })
    }
}


module.exports = { login };