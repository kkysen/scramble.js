import {promises as fsp} from "fs";
import {main} from "./run.mjs";

/**
 * @param {string} words
 * @return {string}
 * @param {boolean|null|undefined|(function(string[]): string[])} and
 */
function filterWords(words, and = undefined) {
    let wordList = words
        .split("\n")
        .filter(s => /^\p{Ll}+$/u.test(s));
    if (and) {
        wordList = and(wordList);
    }
    return wordList
        .sort()
        .sort((a, b) => a.length - b.length)
        .join("\n");
}

/**
 * @param {string} name
 * @param {string} path
 * @return {void}
 */
async function addLexicon(name, path) {
    console.log(`adding lexicon "${name}" from "${path}"`);
    const buffer = await fsp.readFile(path);
    const words = filterWords(buffer.toString(), /english/i.test(name) && (words => {
        // lots of dictionaries include other single letter words for some reason
        return ["a", "I", ...words.filter(s => s.length !== 1)];
    }));
    await fsp.writeFile(`./public/lexicons/${name}.txt`, words);
}

main(async ([name, path]) => {
    await addLexicon(name, path);
})();
