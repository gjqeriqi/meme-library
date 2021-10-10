const mysql = require('mysql2')

const dbCon = mysql.createPool({
    database: 'memelib',
    host: 'localhost',
    user: 'root'
})

module.exports = dbCon