const users = require('../services/users');

module.exports.createUser = async (req, res) => {
    try {
        const data = await users.createUser(req.body);
        res.send(data);
    }

    catch (err) {
        res.status(500).send({ message: err.message });
    }
}

module.exports.login = async (req, res) => {
    try {
        const data = await users.login(req.body);
        res.send(data);
    }

    catch (err) {
        res.status(500).send({ message: err.message });
    }
}