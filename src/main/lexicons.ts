import iterate from "iterare";
import {IteratorWithOperators} from "iterare/lib/iterate";
import {globals} from "./globals";
import {Lexicon, LexiconMetadata, LexiconMetadataImpl, LexiconMetadataPlus} from "./lexicon";
import {lexiconIndex} from "./lexiconIndex";
import {MaybePromise} from "./maybePromise";

export interface LexiconHandle extends LexiconMetadataPlus {
    getCachedPromise(): MaybePromise<Lexicon> | undefined;
    
    getCached(): Lexicon | undefined;
    
    get(): MaybePromise<Lexicon>;
}

class LexiconHandleImpl extends LexiconMetadataImpl implements LexiconHandle {
    
    private lexicon: MaybePromise<Lexicon> | undefined = undefined;
    
    private async fetch(): Promise<Lexicon> {
        const name = this.name;
        const response = await fetch(`lexicons/${name}.txt`);
        const text = await response.text();
        if (text.startsWith("<!DOCTYPE html>")) {
            throw new Error(`the ${this} doesn't actually exist on the server`);
        }
        return new Lexicon(this, text.split("\n"));
    }
    
    getCachedPromise(): MaybePromise<Lexicon> | undefined {
        return this.lexicon;
    }
    
    getCached(): Lexicon | undefined {
        if (this.lexicon instanceof Promise) {
            return;
        }
        return this.lexicon;
    }
    
    get(): MaybePromise<Lexicon> {
        if (this.lexicon) {
            return this.lexicon;
        }
        const lexiconPromise = this.fetch();
        this.lexicon = lexiconPromise;
        lexiconPromise.then(lexicon => this.lexicon = lexicon);
        return lexiconPromise;
    }
    
}

class Lexicons {
    
    private readonly handles: Map<string, LexiconHandle>;
    private readonly defaultNameKey: string;
    private _defaultName: string;
    
    constructor(metadatas: readonly LexiconMetadata[]) {
        this.handles = iterate(metadatas)
            .map(metadata => [metadata.name, new LexiconHandleImpl(metadata)] as [string, LexiconHandle])
            .toMap();
        this.defaultNameKey = "scramble.lexicon.default";
        this._defaultName = this.getDefaultName();
        this.default().get(); // fetch immediately
    }
    
    [Symbol.iterator](): IterableIterator<LexiconHandle> {
        return this.handles.values();
    }
    
    iter(): IteratorWithOperators<LexiconHandle> {
        return iterate(this);
    }
    
    private getDefaultName(): string {
        // store default in localStorage so you resume with the previous default
        // use localStorage since it's synchronous, so don't need to use async-await here
        // since the data I'm storing is so small, just a name, that shouldn't be a problem at all
        const defaultName = localStorage.getItem(this.defaultNameKey);
        if (defaultName !== null && this.handles.has(defaultName)) {
            return defaultName;
        } else {
            return this.iter().map(e => e.name).find(() => true)!;
        }
    }
    
    updateDefault(metadata: LexiconMetadata) {
        this._defaultName = metadata.name;
        localStorage.setItem(this.defaultNameKey, this._defaultName);
    }
    
    get(name: string): LexiconHandle {
        const handle = this.handles.get(name);
        if (!handle) {
            const names = this.iter().map(e => e.name);
            throw new Error(`the Lexicon ${name} doesn't exist in {${names.join(", ")}}`);
        }
        return handle;
    }
    
    default(): LexiconHandle {
        return this.get(this._defaultName);
    }
    
}

// see indexLexicons.mjs
export const lexicons = new Lexicons(lexiconIndex);

globals({lexicons});
