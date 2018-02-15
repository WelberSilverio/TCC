module.exports = function (app) {

	app.post('/matriculas/cadastro', function (req, res) {

		var matricula = req.body;
		var connection = app.models.connectionFactory();
		var matriculaSave = new app.models.matricula(connection);

		matriculaSave.cadastro(matricula, function (err, result) {
			//ação
		})
	});

	app.put('/matriculas/confirma', function (req, res) {

		var matricula = req.body;
		var connection = app.models.connectionFactory();
		var matriculaAltera = new app.models.matricula(connection);

		matriculaAltera.confirma(matricula, function (err, result) {
			//ação
		})
	});

	app.get('/matriculas/selecionaconfirma', function (req, res) {

		var matricula = req.body;
		var connection = app.models.connectionFactory();
		var matriculaSave = new app.models.matricula(connection);

		matriculaSeleciona.seleciona(matricula, function (err, result) {
			//ação
		})
	});

}