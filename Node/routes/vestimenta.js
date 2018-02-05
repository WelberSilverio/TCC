module.exports = function(app){
	
	app.get('/vestimentas',function(req,res){
		var connection = app.models.connectionFactory();
		var vestimentaSave = new app.models.vestimenta(connection);	
		vestimentaSave.Forn( function(err, result) {							
			//ação('vestimentas',{fornecedor : result});
		})});
	
       

       app.post('/vestimentas/salva', function(req, res) {
		
		var vestimenta = req.body;
		var connection = app.models.connectionFactory();
		var vestimentaSave = new app.models.vestimenta(connection);		

		vestimentaSave.salva(vestimenta, function(err, result) {			
			//ação
		})});
	
};