module.exports = function (app) {

	app.post('/alunos/cadastro', function (req, res) {

		var aluno = req.body;
		var connection = app.models.connectionFactory();
		var alunoSave = new app.models.aluno(connection);

		alunoSave.cadastro(aluno, function (err, result) {
			//ação
		})
	});

	app.get('/alunos/pesquisa', function (req, res) {

		var aluno = req.body;
		var connection = app.models.connectionFactory();
		var alunoSearch = new app.models.aluno(connection);

		alunoSearch.pesquisa(aluno, function (err, result) {

		})
	});

	app.get('/alunos/pesquisaCPF', function (req, res) {

		var aluno = req.body;
		var connection = app.models.connectionFactory();
		var alunoSearch = new app.models.aluno(connection);

		alunoSearch.pesquisaCPF(aluno, function (err, result) {

		})
	});

};