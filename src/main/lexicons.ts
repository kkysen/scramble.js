import iterate from "iterare";
import {IteratorWithOperators} from "iterare/lib/iterate";
import {globals} from "./globals";
import {browserLanguages, iso_lang_codes, IsoLangId, IsoLangName, toBaseIsoLang} from "./iso_lang_codes";
import {Lexicon, LexiconMetadata, LexiconMetadataImpl, LexiconMetadataPlus} from "./lexicon";
import {LexiconIndex, lexiconIndex} from "./lexiconIndex";
import {MaybePromise} from "./maybePromise";

export interface LexiconHandle<Metadata extends LexiconMetadata = LexiconMetadata> extends LexiconMetadataPlus<Metadata> {
    getCachedPromise(): MaybePromise<Lexicon<Metadata>> | undefined;
    
    getCached(): Lexicon<Metadata> | undefined;
    
    get(): MaybePromise<Lexicon<Metadata>>;
}

class LexiconHandleImpl<Metadata extends LexiconMetadata> extends LexiconMetadataImpl<Metadata> implements LexiconHandle<Metadata> {
    
    private lexicon: MaybePromise<Lexicon<Metadata>> | undefined = undefined;
    
    get url(): string {
        return `${process.env.PUBLIC_URL}/lexicons/${this.name}.txt`;
    }
    
    private async fetch(): Promise<Lexicon<Metadata>> {
        const response = await fetch(this.url);
        const text = await response.text();
        if (text.startsWith("<!DOCTYPE html>")) {
            throw new Error(`the ${this} doesn't actually exist on the server`);
        }
        return new Lexicon(this, text.split("\n"));
    }
    
    getCachedPromise(): MaybePromise<Lexicon<Metadata>> | undefined {
        return this.lexicon;
    }
    
    getCached(): Lexicon<Metadata> | undefined {
        if (this.lexicon instanceof Promise) {
            return;
        }
        return this.lexicon;
    }
    
    get(): MaybePromise<Lexicon<Metadata>> {
        if (this.lexicon) {
            return this.lexicon;
        }
        const lexiconPromise = this.fetch();
        this.lexicon = lexiconPromise;
        lexiconPromise.then(lexicon => this.lexicon = lexicon);
        return lexiconPromise;
    }
    
}

class Lexicons<Index extends {[key: string]: LexiconMetadata}> {
    
    readonly handles: { readonly [K in keyof Index]: LexiconHandle<Index[K]> };
    private readonly defaultNameKey: string;
    private defaultName: keyof Index;
    
    constructor(index: Index, defaultName?: keyof Index) {
        const handles: { [K in keyof Index]?: LexiconHandle<Index[K]> } = {};
        const entries = Object.entries(index) as unknown as readonly [keyof Index, Index[keyof Index]][];
        for (const [name, metadata] of entries) {
            if (name !== metadata.name) {
                throw new Error(`${name} !== ${metadata.name}`);
            }
            handles[name] = new LexiconHandleImpl(metadata);
        }
        this.handles = handles as { readonly [K in keyof Index]: LexiconHandle<Index[K]> };
        this.defaultNameKey = "scramble.lexicon.default";
        this.defaultName = defaultName ?? this.getDefaultName();
        this.default().get(); // fetch immediately
    }
    
    [Symbol.iterator](): IterableIterator<LexiconHandle<Index[keyof Index]>> {
        const handles = Object.values(this.handles) as unknown as readonly [LexiconHandle<Index[keyof Index]>];
        return handles[Symbol.iterator]();
    }
    
    iter(): IteratorWithOperators<LexiconHandle<Index[keyof Index]>> {
        return iterate(this);
    }
    
    isName(name: string | number | symbol): name is keyof Index {
        return this.handles.hasOwnProperty(name as keyof Index);
    }
    
    nameError(name: string): Error {
        const names = this.iter().map(e => e.name);
        return new Error(`the Lexicon ${name} doesn't exist in {${names.join(", ")}}`);
    }
    
    isMetadata(metadata: LexiconMetadata): metadata is Index[keyof Index] {
        return this.isName(metadata.name);
    }
    
    private getDefaultName(): keyof Index {
        // store default in localStorage so you resume with the previous default
        // use localStorage since it's synchronous, so don't need to use async-await here
        // since the data I'm storing is so small, just a name, that shouldn't be a problem at all
        const defaultName = localStorage.getItem(this.defaultNameKey);
        if (defaultName !== null && this.isName(defaultName)) {
            return defaultName;
        } else {
            return this.iter().map(e => e.name).find(() => true)!;
        }
    }
    
    updateDefault(metadata: Index[keyof Index]) {
        this.defaultName = metadata.name;
        localStorage.setItem(this.defaultNameKey, this.defaultName as string);
    }
    
    tryUpdateDefault(metadata: LexiconMetadata) {
        if (!this.isMetadata(metadata)) {
            throw this.nameError(metadata.name);
        }
        this.updateDefault(metadata);
    }
    
    tryGet(name: string): LexiconHandle<Index[keyof Index]> {
        if (!this.isName(name)) {
            throw this.nameError(name);
        }
        return this.handles[name];
    }
    
    default(): LexiconHandle<Index[keyof Index]> {
        return this.handles[this.defaultName];
    }
    
}

// see indexLexicons.mjs

const lexiconNameToLangCode: { readonly [K in keyof LexiconIndex]: IsoLangName | null } = {
    "American English Huge": "English, United States",
    "American English Insane": "English, United States",
    "American English Large": "English, United States",
    "American English Small": "English, United States",
    "American English": "English, United States",
    "Bokmaal (Bokmål, Norsk)": null,
    "Brazilian": "Portuguese, Brazil",
    "British English Huge": "English, United Kingdom",
    "British English Insane": "English, United Kingdom",
    "British English Large": "English, United Kingdom",
    "British English Small": "English, United Kingdom",
    "British English": "English, United Kingdom",
    "Canadian English Huge": "English, Canada",
    "Canadian English Insane": "English, Canada",
    "Canadian English Large": "English, Canada",
    "Canadian English Small": "English, Canada",
    "Canadian English": "English, Canada",
    "Catala (Catalan)": "Catalan, Spain",
    "Danish (Dansk)": "Danish, Denmark",
    "Dutch (Nederlands)": "Dutch, Netherlands",
    "English Sample": "English",
    "Esperanto": null,
    "Faroese (Foeroyskt)": "Faroese",
    "French": "French",
    "Galician Minimos (Galician)": "Galician",
    "German Medical": "German",
    "Italian": "Italian, Italy",
    "Ngerman": "German",
    "Nynorsk": "Norwegian Nynorsk, Norway",
    "Ogerman": "German",
    "Polish": "Polish, Poland",
    "Portuguese": "Portuguese, Portugal",
    "Spanish": "Spanish",
    "Swedish (Svenska)": "Swedish, Sweden",
    "Swiss": "German, Switzerland",
    "Ukrainian": "Ukrainian, Ukraine",
    "Web2": null,
};

const langCodeToLexiconName = ((): (langId: IsoLangId) => keyof LexiconIndex | undefined => {
    const convert: { readonly [K in IsoLangName]?: keyof LexiconIndex } = {
        "English, United States": "American English",
        "English, United Kingdom": "British English",
        "English, Canada": "Canadian English",
        "Portuguese, Brazil": "Brazilian",
        "Portuguese, Portugal": "Portuguese",
        "German, Switzerland": "Swiss",
    
        English: "American English",
        Catalan: "Catala (Catalan)",
        Danish: "Danish (Dansk)",
        Dutch: "Dutch (Nederlands)",
        Faroese: "Faroese (Foeroyskt)",
        French: "French",
        Galician: "Galician Minimos (Galician)",
        Italian: "Italian",
        German: "Ngerman",
        Polish: "Polish",
        Spanish: "Spanish",
        Swedish: "Swedish (Svenska)",
        "Swiss German": "Swiss",
        Ukrainian: "Ukrainian",
    };
    return langId => {
        const lang = iso_lang_codes.byId[langId];
        if (!lang) {
            console.error(`"${langId}" is not an IETF BCP 47 language code`);
            return;
        }
        let lexiconName = convert[lang.name];
        if (lexiconName) {
            return lexiconName;
        }
        const baseLang = toBaseIsoLang(lang);
        if (!baseLang) {
            return;
        }
        lexiconName = convert[baseLang.name];
        if (lexiconName) {
            return lexiconName;
        }
        return;
    };
})();

const defaultName: keyof LexiconIndex = iterate(browserLanguages)
        .map(langCodeToLexiconName)
        .find(name => name !== undefined)
    ?? "American English";

export const lexicons = new Lexicons(lexiconIndex, defaultName);

globals({lexicons});
