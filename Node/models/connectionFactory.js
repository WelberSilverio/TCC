// app/infra/connectionFactory.js

var mysql = require('mysql');

function createDBConnection() {
	return mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: 'senha',
            database: 'Vestuario'
        }
    );
};

// wrapper
module.exports = function() {
	return createDBConnection;
};

