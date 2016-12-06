import io = require('socket.io');

export class RemoteServer{

    private client : SocketIO.Namespace;

    /**
     * Start the server and listen for remotes.
     */
    public run(){
        this.client = io.listen(3000).sockets;
        this.client.on('connection',(socket) => {

            socket.on('msg',(msg: string) => {
                console.log(msg);
            });     
        })
    }

    public on(){

    }
}