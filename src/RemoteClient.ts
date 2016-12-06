import * as io from "socket.io-client";

export class RemoteClient{

    private socket : any;
    
    constructor() {
        
    }

    /**
     * Start the server and listen for remotes.
     */
    public run(){

        console.log("Connecting to socket...");
        this.socket = io.connect("http://127.0.0.1:3000");
        console.log("Connected");

        console.log("Remote client running");
        this.socket.emit("msg","hello server!");
    }
}