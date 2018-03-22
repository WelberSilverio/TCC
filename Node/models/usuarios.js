function usuarios(connection) {
	this._connection = connection;
};

usuarios.prototype.login = function (data, callback) {
	this._connection.query('SELECT 1 FROM CAD_USER WHERE USER = ? AND SENHA = ?', data, callback);
	this._connection.end();
};

module.exports = (DataType, sequelize) => {
	var User = sequelize.define("User", {
		id_user: {
			type: DataType.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		user: {
			type:DataType.STRING,
			validate:{
				notEmpty: true
			}
		},
		senha:{
			type:DataType.STRING,
			validate:{
				notEmpty: true
			}
		},
	},{tableName:'Cad_Users'});
	return User;
};