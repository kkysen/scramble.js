import {promises as fsp} from "fs";
import {iterate} from "iterare";
import * as pathLib from "path";

async function asyncMain() {
    const dir = "./public/lexicons";
    const paths = await fsp.readdir(dir);
    const promises = iterate(paths)
        .map(fileName => {
            const {name, ext} = pathLib.parse(fileName);
            return {fileName, name, ext};
        }).filter(e => e.ext === ".txt")
        .map(({fileName, name}) => ({path: pathLib.join(dir, fileName), name}))
        .map(async ({path, name}) => {
            const bytes = await fsp.readFile(path);
            const string = bytes.toString();
            const words = string.split("\n");
            
            const numWords = words.length;
            const numChars = iterate(words).map(e => e.length).reduce((a, b) => a + b, 0);
            const numBytes = bytes.length;
            
            return {
                name,
                size: {
                    numWords,
                    numChars,
                    numBytes,
                },
            };
        });
    const metadatas = await Promise.all(promises);
    const json = JSON.stringify(metadatas, null, 4);
    const name = "lexiconIndex";
    const ts = `// see indexLexicons.mjs

import {LexiconMetadata} from "./lexicon";

export const ${name}: readonly LexiconMetadata[] = ${json};`;
    await fsp.writeFile(`./src/main/${name}.ts`, ts);
}

function main() {
    (async () => {
        try {
            await asyncMain();
        } catch (e) {
            console.error(e);
        }
    })();
}

main();
