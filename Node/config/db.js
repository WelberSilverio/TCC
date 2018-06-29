import Sequelize from 'sequelize';
import path from 'path';
import fs from 'fs';
var mysql = require('mysql');
let sequelize = null;

var mysqlconection = {
    host: 'localhost',
    user: 'root',
    password: 'senha',
    params: {
        dialect: 'mysql',
        define: {
            underscored: true
        }
    }
};

module.exports = (app) => {
    if (!sequelize) {
        sequelize = new Sequelize(
            mysqlconection.host,
            mysqlconection.user,
            mysqlconection.password,
            mysqlconection.params
        );

        db = {
            sequelize,
            Sequelize,
            models: {}
        };
        var dir = path.join(__dirname, "models");
        fs.readdirSync(dir).forEach(file => {
            var modelDir = path.join(dir, file);
            var model = sequelize.import(modelDir);
            db.models[model.name] = model;
        });
        Object.keys(db.models).forEach(key => {
            db.models[key].associate(db.models);
        });
    }
    return db;
};

