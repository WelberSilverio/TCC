module.exports = (app) => {

	app.post('/alunos/cadastro',(req, res) => {
		Aluno.create(req.body)
		.then(result => res.json(result))
		.catch(error => {
			res.status(412).json({ msg: error.message });
		});
	});

	app.get('/alunos/pesquisa', function (req, res) {
		Aluno.findAll({ where: req.params })
		.then(result => {
			if (result) {
				res.json(result);
			}
			else {
				res.sendStatus(404);
			}
		})
		.catch(error => {
			res.status(412).json({ msg: error.message });
		});
	});

	app.get('/alunos/pesquisaCPF', function (req, res) {
		User.findOne({ where: req.params })
		.then(result => {
			if (result) {
				res.json(result);
			}
			else {
				res.sendStatus(404);
			}
		})
		.catch(error => {
			res.status(412).json({ msg: error.message });
		});
	});

};