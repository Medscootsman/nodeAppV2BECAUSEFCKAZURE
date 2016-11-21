/**
 * Created by 1607084 on 21/11/2016.
 */
var http = require('http');
var port = process.env.PORT || 1337; //CRINGE

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Murray's top banter site. </title>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>");
    response.write("PHP is shite mySQL is shite");
    response.write("</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
}).listen(port);
console.log("RGU > ABERDEEN");
