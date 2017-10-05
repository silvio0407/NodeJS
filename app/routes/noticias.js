module.exports = function(app){

app.get('/noticias', function(req, res){

//console.log(dbConnection);

var client = app.config.dbConnection();

client.connect();

client.query('select * from noticias', function(error,result){

	res.render("noticias/noticias", {noticias : result.rows});

});	

});

};