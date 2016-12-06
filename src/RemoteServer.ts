import io = require('socket.io');

export class RemoteServer{

    private client : SocketIO.Namespace;
    
    constructor() {
        
    }

    /**
     * Start the server and listen for remotes.
     */
    public run(){
        console.log("Remote server running");

        this.client = io.listen(3000).sockets;
        console.log("Listening for remotes");

        this.client.on('connection',(socket) => {
            console.log('Remote Connected');

            socket.on('msg',(msg) => {
                console.log(msg);
            });     
        })
    }
}