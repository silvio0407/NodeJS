
module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia")

	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		//conexao

		//model

		var client = application.config.dbConnection();

		var noticiasModel = application.app.models.noticiasModel;

		noticiasModel.salvarNoticia(noticia, client, function(error,result){

			//res.send(result);

			//res.render("noticias/noticias", {noticias : result.rows});
			res.redirect('/noticias');

		});

	});
};