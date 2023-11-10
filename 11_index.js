var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'work'
})

connection.connect()

// connection.query('SELECT * FROM user', function (error, results, fields) {
//     // if (error) throw error;
//     console.log(error)
//     console.log(results);
// });

connection.end();