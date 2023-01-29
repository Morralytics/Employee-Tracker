const sql = require('mysql2');
require('dotenv').config();

const connection = sql.createConnection(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3001,
    }
);

module.exports = connection;
