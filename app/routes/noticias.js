module.exports = function(application){

application.get('/noticias', function(req, res){

	//console.log(dbConnection);

	var client = application.config.dbConnection();

	var noticiasModel = application.app.models.noticiasModel;

	noticiasModel.getNoticias(client, function(error,result){

		res.render("noticias/noticias", {noticias : result.rows});

	});

});

};