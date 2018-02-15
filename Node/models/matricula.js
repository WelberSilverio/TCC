function matricula(connection) {
	this._connection = connection;
};

matricula.prototype.cadastro = function(data, callback) {
	this._connection.query('INSERT INTO MATRICULAS SET ?',data, callback);
	this._connection.end();
};

module.exports = function(app) {
	return matricula;
};