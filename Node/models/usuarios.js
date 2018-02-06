function usuarios(connection) {
	this._connection = connection;
};

usuarios.prototype.login = function(data, callback) {	
	this._connection.query('SELECT 1 FROM CAD_USER WHERE USER = ? AND SENHA = ?', data, callback);
};

module.exports = function(app) {
	return usuarios;
};