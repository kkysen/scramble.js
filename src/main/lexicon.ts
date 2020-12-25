import fileSize from "filesize";
import iterate from "iterare";
import {IteratorWithOperators} from "iterare/lib/iterate";
import {LexiconHandle} from "./lexicons";
import {range} from "./range";
import {shuffledString} from "./shuffle";

export interface LexiconSize {
    readonly numWords: number;
    readonly numChars: number;
    readonly numBytes: number;
}

export interface LexiconMetadata {
    readonly name: string;
    readonly size: LexiconSize;
}

export interface LexiconMetadataPlus extends LexiconMetadata {
    toString(): string;
    label(): string;
}

export class LexiconMetadataImpl implements LexiconMetadataPlus {
    
    constructor(protected metadata: LexiconMetadata) {}
    
    get name(): string {
        return this.metadata.name;
    }
    
    get size(): LexiconSize {
        return this.metadata.size;
    }
    
    toString(): string {
        return `Lexicon "${this.name}"`;
    }
    
    label(): string {
        return `${this.name} (${this.size.numWords} words, ${fileSize(this.size.numBytes)})`;
    }
    
}

export class Lexicon extends LexiconMetadataImpl {
    readonly handle: LexiconHandle;
    private readonly words: ReadonlySet<string>;
    private readonly rawWordsByLength: readonly ReadonlyArray<string>[];
    
    constructor(handle: LexiconHandle, words: Iterable<string>) {
        super(handle);
        this.handle = handle;
        this.words = iterate(words)
            .filter(s => s.length > 0)
            .map(s => s.toLowerCase())
            .toSet();
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
    
    private maxLengthBound(): number {
        return this.rawWordsByLength.length;
    }
    
    private lengthRange(): IteratorWithOperators<number> {
        return range({start: 1, stop: this.maxLengthBound()});
    }
    
    lengths(): IteratorWithOperators<number> {
        return this
            .lengthRange()
            .filter(length => this.hasLength(length));
    }
    
    consecutiveLengths(): IteratorWithOperators<number> {
        const onePastMaxLength = this
                .lengthRange()
                .find(length => !this.hasLength(length))
            ?? this.maxLengthBound();
        return range({start: 1, stop: onePastMaxLength});
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
