function aluno(connection) {
	this._connection = connection;
};

aluno.prototype.cadastro = function(data, callback) {
	console.log(data);
	this._connection.query('INSERT INTO alunos SET ?',data, callback);
	this._connection.end();
};

module.exports = function(app) {
	return aluno;
};