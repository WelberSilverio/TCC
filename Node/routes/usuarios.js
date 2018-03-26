module.exports = (app) => {

	app.get('/usuarios/login', (req, res) => {
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

	app.post('/usuarios/cadastro', (req, res) => {
		User.create(req.body)
			.then(result => res.json(result))
			.catch(error => {
				res.status(412).json({ msg: error.message });
			});
	});

};


