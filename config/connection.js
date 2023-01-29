const sql = require('mysql2');
require('dotenv').config();

const connection = sql.createConnection(
    {
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PW,
        host: "localhost",
        port: 3306
    }
);

module.exports = connection;
