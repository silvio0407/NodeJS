
	
module.exports = function(){

	var pg = require('pg');

	var conString = "pg://postgres:postgres@localhost:5432/nodeJS";

	var client = new pg.Client(conString);
	
	console.log('conectando ao banco');

	return client;
}

	


//module.exports = client.connect();

