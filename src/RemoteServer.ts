import io = require('socket.io');

export class RemoteServer{

    private client: SocketIO.Namespace;
    private callbacks : Array<{key: string, callback: (data: any) => void}>;

    constructor(){
        this.callbacks = [];
    }

    /**
     * Start the server and listen for remotes.
     */
    public run(): void{
        this.client = io.listen(3000).sockets;
        this.client.on('connection',(socket) => {

            // socket.on('msg',(msg: string) => {
            //     console.log(msg);
            // });     
            this.applyEventListeners(socket);
        })
    }

    public on(key: string, callback: (data: any) => void): void{
        this.callbacks.push({"key": key, "callback": callback});
    }

    private applyEventListeners(socket: SocketIO.Socket): void{
        this.callbacks.forEach(item => {
            socket.on(item.key, item.callback);
        });
    }
}