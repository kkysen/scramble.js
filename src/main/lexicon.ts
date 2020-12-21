import iterate from "iterare";
import {range} from "./range";

export class Lexicon {
    private readonly wordsByLength: readonly ReadonlyArray<string>[];
    
    constructor(words: readonly string[]) {
        const maxLength = iterate(words).map(e => e.length).reduce(Math.max);
        const wordsByLength: readonly string[][] = range({stop: maxLength})
            .map(() => [] as string[])
            .toArray();
        for (const word of words) {
            wordsByLength[word.length].push(word);
        }
        this.wordsByLength = wordsByLength;
    }
    
    randomWord(length: number): string {
        const words = this.wordsByLength[length];
        return words[Math.random() * words.length];
    }
    
    randomBoard(size: number): string[][] {
        return range({stop: size})
            .map(i => this.randomWord(i + 1))
            .map(word => [...word])
            .toArray();
    }
}
