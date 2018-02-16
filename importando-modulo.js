let http = require('http'),
arquivo = require('fs'); //file system

let server = http.createServer(function(req,res){
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8;'});

    //__dirname = retorna o diretorio do projeto
    arquivo.readFile(__dirname+'/arquivos/index.html',function(erro, html){
        if(erro){
            res.write('Aquivos index.html não encontrado!');
        }else{
            res.write(html);
        }
        res.end();
    });
});

server.listen(3000,function(){
    console.log('servidor rodando na porta 3000...');
})