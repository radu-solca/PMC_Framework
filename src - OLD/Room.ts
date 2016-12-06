export interface IPMCRoom{

    // onActorJoin(): void;
    // onActorLeave(): void;
    // onError(error: Error): void;
}

// import {IPMCGame} from "./Game";
// import {IPMCRemote} from "./Remote";

import * as express from "express";
import httpLib = require('http');
import sio = require('socket.io');
var http : any = httpLib;

export class PMCRoom implements IPMCRoom{

    private app: express.Application;     
    private server: httpLib.Server;
    private io: SocketIO.Server;

    constructor(/*game: IPMCGame, remote: IPMCRemote*/) {
        this.app = express();
        this.server = http.Server(this.app);
        this.io = sio(this.server);
    }

    /**
     * Start the server and listen for actors.
     */
    public run(){
        var port = 3000;

        this.server.listen(port, () => {
            console.log('Server started.');
        });

        this.app.get('/', (req, res, next) => {
            console.log('GET request on \'/\'');

            var room = this.io.of('/remote');
            room.on('connection', (socket: any) => {
                console.log('');
            });

            try {
                res.send('hello PMC!');
            } catch (e) {
                next(e)
            }
            
        });

        this.app.get('/remote', (req, res, next) => {
            console.log('GET request on \'/remote\'');

            try {
                res.send('hello Remote!');
            } catch (e) {
                next(e)
            }
        });
    }
    /**
     * TEST
     */
    private game(){

    }
}