
var pg = require('pg');	

var connPostGre = function(){

	//console.log('Conexão com o banco de dados foi estabelecida');

	var conString = "pg://postgres:postgres@localhost:5432/nodeJS";

	var client = new pg.Client(conString);
	
	console.log('conectando ao banco');

	return client;
}

module.exports = function(){

	//console.log('o autoload carregou o modulo de conexao');

	return connPostGre;
}

	


//module.exports = client.connect();

