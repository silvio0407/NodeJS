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

	this._client.connect();

	this._client.query('insert into noticias(titulo, noticia) values($1, $2)', 
		[noticia.titulo, noticia.noticia], callback)

}


module.exports = function(){

return NoticiasDAO;

}