module.exports = function(){

this.getNoticias = function(client, callback){

	client.connect();

	client.query('select * from noticias', callback);	
};

this.getNoticia = function(client, callback){

	client.connect();

	client.query('select * from noticias where id_noticia = 1', callback);	
};

return this;

}