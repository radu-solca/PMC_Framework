import {IPMCRoom, PMCRoom} from "./Room";
import {IPMCRemote} from "./Remote";
import {IPMCGame} from "./Game";

export class PMC{
    public createRoom(/*game: IPMCGame, remote: IPMCRemote*/): IPMCRoom{
        return new PMCRoom();
    }
} 