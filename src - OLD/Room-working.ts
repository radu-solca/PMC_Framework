export interface IPMCRoom{

    // onActorJoin(): void;
    // onActorLeave(): void;
    // onError(error: Error): void;
}

import * as express from "express";
import * as http from "http";


export class PMCRoom implements IPMCRoom{
    //node.js express application:
    private app: express.Application; 

    constructor() {
        this.app = express();
    }

    public run(){

        var http_ : any = http; //otherwise typescript complains that http.Server does not exist, even though it does, and it is defined in the d.ts file.
        var port = 3000;

        //define a node.js server and run the application on it
        var server: http.Server = http_.Server(this.app);
        server.listen(port, function () {
            console.log('Server started.');
        });

        this.app.get('/', function (req, res, next) {
            try {
                console.log('GET request on \'/\'');
                res.send('hello PMC!');
            } catch (e) {
                next(e)
            }
            
        });
    }
}