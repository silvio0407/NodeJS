
var app = require('./config/server')

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);


app.listen(3000, function(){

console.log('Servidor ON');

});