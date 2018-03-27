function aluno(connection) {
	this._connection = connection;
};

aluno.prototype.cadastro = function(data, callback) {
	this._connection.query('INSERT INTO alunos SET ?',data, callback);
	this._connection.end();
};

aluno.prototype.pesquisa = function(data, callback) {
	this._connection.query('SELECT ID_ALUNO, NOME_COMPLETO from alunos WHERE NOME_COMPLETO LIKE ?',data, callback);
	this._connection.end();
};

aluno.prototype.pesquisaCPF = function(data, callback) {
	this._connection.query('SELECT ID_ALUNO, NOME_COMPLETO from alunos WHERE CPF = ?',data, callback);
	this._connection.end();
};

module.exports = (DataType, sequelize) => {
	var Aluno = sequelize.define('Alunos',{
		id_aluno:{
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		nome_completo:{
			type:DataType.STRING(270),
			validate:{
				notEmpty: true
			}
		},
		cpf:{
			type:DataType.STRING(11),
			validate:{
				notEmpty: true
			}
		},
		rg:{
			type:DataType.STRING(9)
		},
		orgao_expedidor:{
			type:DataType.STRING(7)			
		},
		estado:{
			type:DataType.STRING(2)			
		},
		cep:{
			type:DataType.STRING(8)			
		},
		rua:{
			type:DataType.STRING(270)			
		},
		numero_resid:{
			type:DataType.STRING(5)			
		},
		bairro:{
			type:DataType.STRING(270)			
		},
		complemento:{
			type:DataType.STRING(270)			
		},
		telefone:{
			type:DataType.STRING(10)			
		},
		celular:{
			type:DataType.STRING(11)			
		},
		sexo:{
			type:DataType.STRING(3)			
		},
		deficiencia:{
			type:DataType.BOOLEAN			
		},
		tipo_deficiencia:{
			type:DataType.STRING(400)			
		},
		data_nascimento:{
			type:DataType.DATEONLY			
		}
	},{tableName:'Alunos'}
);

	return Aluno;
};