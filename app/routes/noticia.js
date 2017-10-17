module.exports = function(application){

application.get('/noticia', function(req, res){

	//console.log(dbConnection);

	var client = application.config.dbConnection();

	var noticiasModel = application.app.models.noticiasModel;

	noticiasModel.getNoticia(client, function(error,result){

		res.render("noticias/noticia", {noticia : result.rows});

	});	


});

};