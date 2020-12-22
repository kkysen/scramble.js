import iterate from "iterare";
import {IteratorWithOperators} from "iterare/lib/iterate";
import {range} from "./range";
import {shuffledString} from "./shuffle";

export class Lexicon {
    readonly name: string;
    private readonly words: ReadonlySet<string>;
    private readonly rawWordsByLength: readonly ReadonlyArray<string>[];
    
    constructor(name: string, words: Iterable<string>) {
        this.name = name;
        this.words = new Set(iterate(words).map(s => s.toUpperCase()));
        const maxLength = iterate(this.words).map(e => e.length).reduce(Math.max);
        const wordsByLength: string[][] = range({stop: maxLength + 1})
            .map(() => [] as string[])
            .toArray();
        for (const word of this.words) {
            wordsByLength[word.length].push(word);
        }
        this.rawWordsByLength = wordsByLength;
    }
    
    toString(): string {
        return `${this.name} Lexicon (${this.words.size} words)`;
    }
    
    private wordsByLength(length: number): readonly string[] {
        return this.rawWordsByLength[length] ?? [];
    }
    
    hasLength(length: number): boolean {
        return this.wordsByLength(length).length > 0;
    }
    
    lengths(): Iterable<number> {
        return range({stop: this.rawWordsByLength.length})
            .filter(length => this.hasLength(length));
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
        };
    }
    
    randomWord(length: number): string {
        if (!this.hasLength(length)) {
            throw new Error(`${this} has no words of length ${length}`);
        }
        const words = this.wordsByLength(length);
        return words[(Math.random() * words.length) | 0];
    }
    
    randomWords(size: number): IteratorWithOperators<string> {
        return range({stop: size})
            .map(i => this.randomWord(i + 1));
    }
    
    randomShuffledWords(size: number): ShuffledWords {
        const solution = this.randomWords(size).toArray();
        const letters = shuffledString(solution.join(""));
        const words: string[] = [];
        let start = 0;
        for (let i = 1; i <= size; i++) {
            const end = start + i;
            words.push(letters.slice(start, end));
            start = end;
        }
        return {solution, shuffled: words};
    }
    
}

export interface ShuffledWords {
    readonly solution: readonly string[];
    readonly shuffled: readonly string[];
}

export interface WordChecker {
    
    word(word: string): boolean;
    
    words(words: readonly string[]): boolean;
    
}
