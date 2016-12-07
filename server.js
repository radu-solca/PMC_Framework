// var remoteLib = require("./dist/RemoteServer").RemoteServer;
// var remote = new remoteLib();

// remote.run();


var app = require("express")();
var server = require("http").Server(app);
var RemoteServer = require("./dist/RemoteServer").RemoteServer;
var RemoteClient = require("./dist/RemoteClient").RemoteClient;



server.listen(4000, function () {

    //listen for remotes
    var remoteServer = new RemoteServer();
    remoteServer.run();

    //print any messages from the remote to the console
    remoteServer.on('msg', function(msg){
        console.log(msg);
    });

    console.log('Server started.');
    
});

app.get('/', function (req, res, next) {

    //should display output here: how?

    try {
        res.send('<div id="test"> server </div>');
    } catch (e) {
        next(e)
    }
});

app.get('/remote', function (req, res, next) {

    //connect a remote to the server.
    var remote = new RemoteClient();
    remote.run();

    try {
        res.send("client");
    } catch (e) {
        next(e)
    }
});
