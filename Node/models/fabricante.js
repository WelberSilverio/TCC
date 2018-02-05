function fabricante(connection) {
	this._connection = connection;
};

fabricante.prototype.salva = function(data, callback) {	
	this._connection.query('INSERT INTO Fabricante SET ?', data, callback);
};

module.exports = function(app) {
	return fabricante;
};