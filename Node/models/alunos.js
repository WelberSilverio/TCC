function aluno(connection) {
	this._connection = connection;
};

aluno.prototype.cadastro = function(data, callback) {
	this._connection.query('INSERT INTO alunos SET ?',data, callback);
	this._connection.end();
};

aluno.prototype.pesquisa = function(data, callback) {
	this._connection.query('SELECT ID_ALUNO, NOME_COMPLETO from alunos WHERE NOME_COMPLETO LIKE ?',data, callback);
	this._connection.end();
};

aluno.prototype.pesquisaCPF = function(data, callback) {
	this._connection.query('SELECT ID_ALUNO, NOME_COMPLETO from alunos WHERE CPF = ?',data, callback);
	this._connection.end();
};

module.exports = function(app) {
	return aluno;
};