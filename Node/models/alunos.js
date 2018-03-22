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
			type:DataType.STRING,
			validate:{
				notEmpty: true
			}
		},
		cpf:{
			type:DataType.STRING,
			validate:{
				notEmpty: true
			}
		},
		rg:{
			type:DataType.STRING
		},
		orgao_expedidor:{
			type:DataType.STRING			
		},
		estado:{
			type:DataType.STRING			
		},
		cep:{
			type:DataType.STRING			
		},
		rua:{
			type:DataType.STRING			
		},
		numero_resid:{
			type:DataType.STRING			
		},
		bairro:{
			type:DataType.STRING			
		},
		complemento:{
			type:DataType.STRING			
		},
		telefone:{
			type:DataType.STRING			
		},
		celular:{
			type:DataType.STRING			
		},
		sexo:{
			type:DataType.STRING			
		},
		deficiencia:{
			type:DataType.BOOLEAN			
		},
		tipo_deficiencia:{
			type:DataType.STRING			
		},
		data_nascimento:{
			type:DataType.DATEONLY			
		}
	},{tableName:'Alunos'}
);
	return Aluno;
};