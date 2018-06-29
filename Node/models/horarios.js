module.exports = (DataType, sequelize) => {
	var Horario = sequelize.define("Horario", {
		id_horario: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		dia: {
			type:DataType.STRING(3),
			validate:{
				notEmpty: true
			}
		},
		hr_inicio:{
			type:DataType.STRING(10),
			validate:{
				notEmpty: true
			}
		},
		hr_fim:{
			type:DataType.STRING(10),
			validate:{
				notEmpty: true
			}
		}
	},{tableName:'Horarios'} 
);
	return Horario;
};