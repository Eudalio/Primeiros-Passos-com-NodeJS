var http = require('http');

var server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'text/html'});
    response.write("Hello world write using NodeJS!");
    response.write('<br>Write by Eudalio Sousa.')
    response.end();
});

server.listen(3000,function(){
    console.log('Servidor rodando.... ');
})