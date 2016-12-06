import * as io from "socket.io-client";

export class RemoteClient{

    private socket : any;

    /**
     * Start the server and listen for remotes.
     */
    public run(){
        this.socket = io.connect("http://127.0.0.1:3000");
        this.socket.emit("msg","hello server!");
    }
}