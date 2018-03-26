module.exports = (DataType, sequelize) => {
	var Horario = sequelize.define("Horario", {
		id_horario: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		dia: {
			type:DataType.STRING,
			validate:{
				notEmpty: true
			}
		},
		hr_inicio:{
			type:DataType.STRING,
			validate:{
				notEmpty: true
			}
		},
		hr_fim:{
			type:DataType.STRING,
			validate:{
				notEmpty: true
			}
		}
	},{tableName:'Horarios'} 
);
	return Horario;
};