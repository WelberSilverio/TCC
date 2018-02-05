function vestimenta(connection) {
	this._connection = connection;
};

vestimenta.prototype.salva = function(data, callback) {
	console.log(data);
	this._connection.query('INSERT INTO Vestuarios_Lista SET ?',data, callback);
};

vestimenta.prototype.Forn = function(callback) {	
	this._connection.query('SELECT fabricanteID, razaosocial FROM Fabricante ', callback);
};

module.exports = function(app) {
	return vestimenta;
};