var http = require('http');

var server = http.createServer(function(req, res){

	var categoria = req.url;

	console.log(categoria);

	if(categoria == '/tecnologia'){
		res.end("<html><bdy>Noticias de Tecnologia 2</body></html>");

	}else if(categoria == '/moda'){

		res.end("<html><bdy>Noticias de Moda</body></html>");
	}else if(categoria == '/beleza'){

		res.end("<html><bdy>Noticias de beleza</body></html>");
	}else{
		res.end("<html><bdy>Portal de noticias 2</body></html>");
	}





});

server.listen(3000);