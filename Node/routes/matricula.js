module.exports = (app) => {

	app.post('/matriculas/cadastro', (req, res) => {
		Matricula.create(req.body)
			.then(result => res.json(result))
			.catch(error => {
				res.status(412).json({ msg: error.message });
			});
	});

	app.put('/matriculas/confirma', function (req, res) {
		Matricula.update(req.body, { where: req.params })
			.then(result => res.sendStatus(204))
			.catch(error => {
				res.status(412).json({ msg: error.message });
			});
	});

	app.get('/matriculas/selecionaconfirma', function (req, res) {
		//ALTERAR SELECT PARA SELECIONAR TUDO MATRICULA E NOME, TELEFONE, CELULAR (Disponibilidade de horário tbm, ou em outro lugar)
		Matricula.findAll({ where: req.params, include: [Aluno] })
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

}