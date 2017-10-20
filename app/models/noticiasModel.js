module.exports = function(){

this.getNoticias = function(client, callback){

	client.connect();

	client.query('select * from noticias', callback);	
};

this.getNoticia = function(client, callback){

	client.connect();

	client.query('select * from noticias where id_noticia = 1', callback);	
};

this.salvarNoticia = function(noticia, client, callback){

	client.connect();

	client.query('insert into noticias(titulo, noticia) values($1, $2)', 
		[noticia.titulo, noticia.noticia], callback)

}

return this;

}