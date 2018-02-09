module.exports = function(app){

       app.post('/alunos/cadastro', function(req, res) {
		
		var vestimenta = req.body;
		var connection = app.models.connectionFactory();
		var alunoSave = new app.models.aluno(connection);		

		alunoSave.cadastro(vestimenta, function(err, result) {			
			//ação
		})});
	
};