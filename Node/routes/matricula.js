module.exports = (app) => {

	app.post('/matriculas/cadastro', (req, res) => {
		Matricula.create(req.body)
			.then(result => res.json(result))
			.catch(error => {
				res.status(412).json({ msg: error.message });
			});
	});

	app.put('/matriculas/confirma', function (req, res) {

	});

	app.get('/matriculas/selecionaconfirma', function (req, res) {

	});

}