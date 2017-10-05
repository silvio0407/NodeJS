var dbConnection = require('../../config/dbConnection');

module.exports = function(app){

app.get('/noticias', function(req, res){

console.log(dbConnection);

var client = dbConnection();

client.connect();

client.query('select * from noticias', function(error,result){
//console.log({noticias : result.rows});
		//res.send(result.rows);
	res.render("noticias/noticias", {noticias : result.rows});

});	

});

};