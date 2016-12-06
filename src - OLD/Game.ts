export interface IPMCGame{
    
    getUI(): string;
}

export class ExampleGame implements IPMCGame{
    public getUI() : string{
        return "Hello Game!"
    }
}