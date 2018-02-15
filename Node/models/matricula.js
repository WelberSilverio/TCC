function matricula(connection) {
	this._connection = connection;
};

matricula.prototype.cadastro = function (data, callback) {
	this._connection.query('INSERT INTO MATRICULAS SET ?', data, callback);
	this._connection.end();
};

matricula.prototype.confirma = function (data, callback) {
	this._connection.query('UPDATE MATRICULAS SET ?', data, callback);
	this._connection.end();
};

matricula.prototype.seleciona = function (data, callback) {
	//ALTERAR SELECT PARA SELECIONAR TUDO MATRICULA E NOME, TELEFONE, CELULAR (Disponibilidade de horário tbm, ou em outro lugar)
	this._connection.query('SELECT * FROM MATRICULAS WHERE ?', data, callback);
	this._connection.end();
};

module.exports = function (app) {
	return matricula;
};