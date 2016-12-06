// var remoteLib = require("./dist/RemoteServer").RemoteServer;
// var remote = new remoteLib();

// remote.run();


var app = require("express")();
var server = require("http").Server(app);

var remoteServer = new (require("./dist/RemoteServer").RemoteServer)();
var remoteClient = new (require("./dist/RemoteClient").RemoteClient)();

server.listen(4000, function () {
    console.log('Server started.');
});

app.get('/', function (req, res, next) {
   
    remoteServer.run();

    try {
        res.send("server");
    } catch (e) {
        next(e)
    }
});

app.get('/remote', function (req, res, next) {

    remoteClient.run();

    try {
        res.send("client");
    } catch (e) {
        next(e)
    }
});
