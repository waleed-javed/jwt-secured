// const userDAL = require("../../data-access/user");
// const { getUTCDateTime } = require("../../helpers/utility");

const create = async (user) => {
    // await userDAL.create(user);
    return {body:"User Created [Hardcoded-Result]"};
};

const getByEmail = async (email) => {
    // return await userDAL.getByEmail(email);
    return {body:"User Found by Email [Hardcoded-Result]"};
};

module.exports = { create, getByEmail };