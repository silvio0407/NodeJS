function NoticiasDAO(client){
	this._client = client;

}

NoticiasDAO.prototype.getNoticias = function(callback){

	this._client.connect();

	this._client.query('select * from noticias', callback);	
};

NoticiasDAO.prototype.getNoticia = function(callback){

	this._client.connect();

	this._client.query('select * from noticias where id_noticia = 1', callback);	
};

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback){
	console.log(noticia);

	this._client.connect();

	this._client.query('insert into noticias(titulo, noticia, resumo, autor, data_noticia) values($1, $2, $3, $4, $5)', 
		[noticia.titulo, noticia.noticia, noticia.resumo, noticia.autor, noticia.data_noticia], callback)

}


module.exports = function(){

return NoticiasDAO;

}