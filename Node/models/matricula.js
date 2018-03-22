function matricula(connection) {
	this._connection = connection;
};

matricula.prototype.cadastro = function (data, callback) {
	this._connection.query('INSERT INTO MATRICULAS SET ?', data, callback);
	this._connection.end();
};

matricula.prototype.confirma = function (data, callback) {
	this._connection.query('UPDATE MATRICULAS SET ?', data, callback);
	this._connection.end();
};

matricula.prototype.seleciona = function (data, callback) {
	//ALTERAR SELECT PARA SELECIONAR TUDO MATRICULA E NOME, TELEFONE, CELULAR (Disponibilidade de hor�rio tbm, ou em outro lugar)
	this._connection.query('SELECT * FROM MATRICULAS WHERE ?', data, callback);
	this._connection.end();
};

module.exports = (DataType, sequelize) => {
	var Matricula = sequelize.define("Matricula", {
		id_matricula: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		data_matricula: {
			type:DataType.DATEONLY,
			defaultValue: DataType.NOW,
			validate:{
				notEmpty: true
			}
		},
		status_matricula:{
			type:DataType.STRING,
			validate:{
				notEmpty: true
			}
		},
		modulo_atual:{
			type:DataType.STRING
		},
		id_aluno: {
			type: DataType.INTEGER,
			validate:{
				notEmpty: true
			}
		},
		id_horario_um: {
			type: DataType.INTEGER,
			validate:{
				notEmpty: true
			}
		},
		id_horario_dois: {
			type: DataType.INTEGER
		}
	},{tableName:'Matriculas'}
);
Matricula.belongsTo(Aluno, {foreignKey: 'fk_aluno', targetKey: 'id_aluno'});
Matricula.belongsTo(Horario, {foreignKey:'fk_horario_um', targetKey:'id_horario_um'});
Matricula.belongsTo(Horario, {foreignKey:'fk_horario_dois', targetKey:'id_horario_dois'});

return Matricula;
};