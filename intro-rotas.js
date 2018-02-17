let http = require('http'),
url = require('url');

let server = http.createServer(function(request, response){
    response.writeHead(200, {'Content-type': 'text/html; charset = utf-8'});
    
    if(request.url == '/')
        response.write('<h1>Página Home</h1>');
    else if(request.url == '/contatos')
        response.write('<h1>Página Contatos</h1>');
    else if(request.url == '/usuarios')
        response.write('<h1>Página Usuários</h1>');
    else
        response.write('<h1>Página não encontrada!!</h1>');
    
    let resultado = url.parse(request.headers.host+request.url);
    response.write('<br>');
    response.write(resultado.href);

    response.end();
});

server.listen(3000,function(){
    console.log('Servidor rodando na porta 3000.... ');
})