var app = require('./config/express')();

app.db.sequelize.sync().done(()=>{
app.listen(3000);
console.log('app rodando na rota 3000');
});

