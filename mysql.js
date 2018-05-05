const mysql = require('mysql');
var connection = mysql.createConnection(mysql.createConnection(process.env.CLEARDB_DATABASE_URL));