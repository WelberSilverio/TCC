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
			type:DataType.STRING(20),
			validate:{
				notEmpty: true
			}
		},
		modulo_atual:{
			type:DataType.STRING(30)
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