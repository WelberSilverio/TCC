module.exports = (DataType, sequelize) => {
	var Certificado = sequelize.define("Certificado", {
		id_certificado: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		id_prof_um: {
			type: DataType.INTEGER,
			validate: {
				notEmpty: true
			}
        },
        id_prof_dois: {
			type: DataType.INTEGER
		},
		data_emissao: {
            type: DataType.DATE,
            defaultValue: DataType.NOW,
			validate: {
				notEmpty: true
			}
        },
        carga_horaria: {
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
	}, { tableName: 'Certificados' } 
	);
	Certificado.belongsTo(Aluno, { foreignKey: 'fk_aluno', targetKey: 'id_aluno' });
	Certificado.belongsTo(User, { foreignKey: 'fk_prof_um', targetKey: 'id_prof_um' });
    Certificado.belongsTo(User, { foreignKey: 'fk_prof_dois', targetKey: 'id_prof_dois' });
    
	return Certificado;
};