import iterate from "iterare";
import {range} from "./range";

export class Lexicon {
    private readonly words: ReadonlySet<string>;
    private readonly wordsByLength: readonly ReadonlyArray<string>[];
    
    constructor(words: readonly string[]) {
        this.words = new Set(words);
        const maxLength = iterate(words).map(e => e.length).reduce(Math.max);
        const wordsByLength: string[][] = range({stop: maxLength})
            .map(() => [] as string[])
            .toArray();
        for (const word of words) {
            const wordsOfLengthN = wordsByLength[word.length] ?? [];
            if (wordsOfLengthN.length === 0) {
                wordsByLength[word.length] = wordsOfLengthN;
            }
            wordsOfLengthN.push(word);
        }
        this.wordsByLength = wordsByLength;
    }
    
    randomWord(length: number): string {
        const words = this.wordsByLength[length];
        return words[(Math.random() * words.length) | 0];
    }
    
    randomWords(size: number): readonly string[] {
        return range({stop: size})
            .map(i => this.randomWord(i + 1))
            .toArray();
    }
    
    checkWord(word: string): boolean {
        return this.words.has(word);
    }
    
    checkWords(words: readonly string[]): boolean {
        return words.every(word => this.checkWord(word));
    }
    
    wordChecker(): WordChecker {
        return {
            word: word => this.checkWord(word),
            words: words => this.checkWords(words),
        }
    }
    
}

export interface WordChecker {
    
    word(word: string): boolean;
    
    words(words: readonly string[]): boolean;
    
}
