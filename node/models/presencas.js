module.exports = (DataType, sequelize) => {
	var Presenca = sequelize.define("Presenca", {
		id_presenca: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		tipo_presenca: {
			type: DataType.STRING,
			validate: {
				notEmpty: true
			}
		},
		data_chamada: {
			type: DataType.DATE,
			validate: {
				notEmpty: true
			}
		},
		id_hotario: {
			type: DataType.INTEGER,
			validate: {
				notEmpty: true
			}
		},
		id_aluno: {
			type: DataType.INTEGER,
			validate: {
				notEmpty: true
			}
		}
	}, { tableName: 'Presencas' }
	);
	Presenca.belongsTo(Aluno, { foreignKey: 'fk_aluno', targetKey: 'id_aluno' });
	Presenca.belongsTo(Horario, { foreignKey: 'fk_horario', targetKey: 'id_horario' });
	 
	return Presenca;
};