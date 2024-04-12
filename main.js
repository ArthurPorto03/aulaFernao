var http = require("http");

var info = require('./exports');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //res.write("vai chamar outro modulo ou biblioteca customizada");
    res.write("Nome do Aluno: "+ info.FirstName + "Sobrenome: " +info.LastName + "RGM: " + info.RGM);
    res.end();
}).listen(8092, ()=> {
    console.log('Se dar certo, aparece');
});