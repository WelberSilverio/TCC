module.exports = function(app){
    app.get('/fabricantes',function(req,res){
		//a��o        
       });

       app.post('/fabricantes/salva', function(req, res) {
		var fabricante = req.body;
		var connection = app.models.connectionFactory();
		var fabricanteSave = new app.models.fabricante(connection);		

		fabricanteSave.salva(fabricante, function(err, result) {
			//a��o
		})});
};