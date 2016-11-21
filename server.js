/**
 * Created by 1607084 on 21/11/2016.
 */
var http = require('http');
var port = process.env.PORT || 1337; //CRINGE

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hellow world\n');
}).listen(port);
