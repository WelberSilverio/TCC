module.exports = function (app) {
    
    app.post('/matriculas/cadastro', function (req, res) {

		var matricula = req.body;
		var connection = app.models.connectionFactory();
		var matriculaSave = new app.models.matricula(connection);

		matriculaSave.cadastro(matricula, function (err, result) {
			//ação
		})
    });
    
}