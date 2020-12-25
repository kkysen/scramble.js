import {promises as fsp} from "fs";

/**
 * @param {string} words
 * @return {string}
 */
function filterWords(words) {
    return words
        .split("\n")
        .filter(s => /^\p{Ll}+$/u.test(s))
        .sort()
        .sort((a, b) => a.length - b.length)
        .join("\n");
}

/**
 * @param {string} name
 * @param {string} path
 * @return {undefined}
 */
async function addLexicon(name, path) {
    console.log(`adding lexicon "${name}" from "${path}"`);
    const buffer = await fsp.readFile(path);
    await fsp.writeFile(`./public/lexicons/${name}.txt`, filterWords(buffer.toString()));
}

async function asyncMain() {
    // eslint-disable-next-line no-unused-vars
    const [_node, _script, ...args] = process.argv;
    const [name, path] = args;
    await addLexicon(name, path);
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
