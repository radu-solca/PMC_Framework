export interface IPMCRemote{
    getUI(): string;
}

export class ExampleRemote implements IPMCRemote{
    public getUI() : string{
        return "Hello Remote!"
    }
}