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
			unique: true,
			validate:{
				notEmpty: true
			}
		},
		rg:{
			type:DataType.STRING(9),
			unique: true
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