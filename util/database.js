const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'happy_world',
    password: 'good@123'
});

module.exports = pool.promise();