import {promises as fsp} from "fs";
import {iterate} from "iterare";
import * as pathLib from "path";
import {main} from "./run.mjs";
import {capitalize} from "./util.mjs";

async function indexLexicons() {
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
            const words = string.split("\n").filter(s => s.length > 0);
            
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
    const allMetadatas = await Promise.all(promises);
    const metadatas = allMetadatas.filter(e => e.size.numWords > 0);
    const metadataObj = metadatas.reduce((o, e) => (o[e.name] = e, o), {});
    const json = JSON.stringify(metadataObj, null, 4);
    const name = "lexiconIndex";
    const ts = `// see indexLexicons.mjs

export const ${name} = ${json} as const;

export type ${capitalize(name)} = typeof ${name};
`;
    await fsp.writeFile(`./src/main/${name}.ts`, ts);
}

main(async () => {
    await indexLexicons();
})();
