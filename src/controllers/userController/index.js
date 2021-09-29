const { getUsers } = require('./getUsers');
const { createUser } = require('./createUser');
const { deleteUser } = require('./deleteUser');
const { roleUser } = require('./roleUser');
const { createRole } = require('./createRole');

module.exports = {
    getUsers,
    createUser,
    deleteUser,
    roleUser,
    createRole
}