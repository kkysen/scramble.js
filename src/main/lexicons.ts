import iterate from "iterare";
import {IteratorWithOperators} from "iterare/lib/iterate";
import {globals} from "./globals";
import {Lexicon} from "./lexicon";
import {MaybePromise} from "./maybePromise";

class Lexicons {
    private readonly lexicons: Map<string, MaybePromise<Lexicon> | null>;
    private readonly defaultNameKey: string;
    private _defaultName: string;
    
    constructor(names: Iterable<string>) {
        this.lexicons = new Map(iterate(names).map(name => [name, null]));
        this.defaultNameKey = "scramble.lexicon.default";
        this._defaultName = this.getDefaultName();
        this.default(); // fetch immediately
    }
    
    names(): IteratorWithOperators<string> {
        return iterate(this.lexicons.keys());
    }
    
    private getDefaultName(): string {
        // store default in localStorage so you resume with the previous default
        // use localStorage since it's synchronous, so don't need to use async-await here
        // since the data I'm storing is so small, just a name, that shouldn't be a problem at all
        const defaultName = localStorage.getItem(this.defaultNameKey);
        if (defaultName !== null && this.lexicons.has(defaultName)) {
            return defaultName;
        } else {
            return this.names().next().value;
        }
    }
    
    defaultName(): string {
        return this._defaultName;
    }
    
    updateDefault(lexicon: Lexicon) {
        this._defaultName = lexicon.name;
        localStorage.setItem(this.defaultNameKey, this._defaultName);
    }
    
    // noinspection JSMethodCanBeStatic
    private async fetch(name: string): Promise<Lexicon> {
        const response = await fetch(`/lexicons/${name}.txt`);
        const text = await response.text();
        if (text.startsWith("<!DOCTYPE html>")) {
            throw new Error(`the Lexicon ${name} doesn't actually exist on the server`);
        }
        return new Lexicon(name, text.split("\n"));
    }
    
    get(name: string): MaybePromise<Lexicon> {
        const lexicon = this.lexicons.get(name);
        if (lexicon === undefined) {
            throw new Error(`the Lexicon ${name} doesn't exist in {${this.names().join(", ")}}`);
        } else if (lexicon === null) {
            const lexiconPromise = this.fetch(name);
            this.lexicons.set(name, lexiconPromise);
            lexiconPromise.then(lexicon => this.lexicons.set(name, lexicon));
            return lexiconPromise;
        } else {
            return lexicon;
        }
    }
    
    default(): MaybePromise<Lexicon> {
        return this.get(this.defaultName());
    }
}

export const lexicons = new Lexicons([
    "English Sample",
    "English",
]);

globals({lexicons});
