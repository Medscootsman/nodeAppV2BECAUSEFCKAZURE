/**
 * Created by 1607084 on 21/11/2016.
 */
/**
 * Created by 1607084 on 21/11/2016.
 */
//lets require/import the mongodb native drivers.
var mongodb = require("mongodb");
//and our HTTP server
var http = require('http');
//setup our port
var port = process.env.PORT || 1337; //WHHHYYYYYYYYYYY SO MUCH

var url = 'mongodb://testcats:cat@ds050879.mlab.com:50879/nodeapp';

var MongoClient  = mongodb.MongoClient;
http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('Connecting \n');
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            //Error so close connection
            db.close();
        } else {
            //HURRAY!! We are connected. :)
            response.write('Connection established to' + url + "\n");

            // do some work here with the database.
            // Get the documents collection
            var collection = db.collection('users');
            var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};
            var user2 = {name: 'modulus user', age: 22, roles: ['user']};
            var user3 = {name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user']};
            collection.update({name: 'modulus user'}, {$set: {enabled: false}}, function (err, numUpdated) {
                if (err) {
                    response.write(err);
                } else if (numUpdated) {
                    response.write('Updated Seuccesfully : ' + numUpdated + "\n");
                } else {
                    response.write('No document found');
                }

                db.close;
            });
                response.end('DB closed');

        }
    });

}).listen(port);

