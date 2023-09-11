// module.exports = {
//     host:"aws.connect.psdb.cloud",
//     user:"cpr5pkne308z563iae79",
//     password:"pscale_pw_VA0MaYiuArhK37S98p0XLkvkFhvShyNneA8IzHmzoAn",
//     db:"se_database"
// }
require('dotenv').config()

module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
};