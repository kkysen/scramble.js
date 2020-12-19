export class Board {
    
    constructor(readonly words: readonly string[]) {}
    
    get size() {
        return this.words.length;
    }
    
    static example(): Board {
        return new Board([
            "A",
            "HI",
            "TWO",
            "FOUR",
            "HELLO",
        ]);
    }
}

