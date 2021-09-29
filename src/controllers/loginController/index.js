const jwt = require('jsonwebtoken');

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
                error: "Id is incorrect"
            })
        } else {
            res.json({
                data: user
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


module.exports = { login };