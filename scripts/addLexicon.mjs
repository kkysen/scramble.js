import {promises as fsp} from "fs";
import * as pathLib from "path";

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

/**
 *
 * @param {string} s
 * @return {string}
 */
function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

/**
 *
 * @param {string} s
 * @return {string}
 */
function kebabToTitleCase(s) {
    return s.split("-").map(capitalize).join(" ");
}

/**
 * @param {{name: string, realPath: string, isSymlink: boolean}[]} files
 * @return {{name: string, path: string}[]}
 */
function determineNames(files) {
    /**
     *
     * @type {Map<string, {name: string, realPath: string, isSymlink: boolean}[]>}
     */
    const fileMap = new Map();
    files.forEach(file => {
        const sameFiles = fileMap.get(file.realPath) ?? [];
        if (sameFiles.length === 0) {
            fileMap.set(file.realPath, sameFiles);
        }
        sameFiles.push(file);
    });
    return [...fileMap.entries()].map(([path, files]) => {
        const {name: realName} = pathLib.parse(path);
        /**
         * @type {string[]}
         */
        const aliases = files.filter(e => e.isSymlink).map(e => e.name);
        let name = kebabToTitleCase(realName);
        if (aliases.length > 0) {
            name += ` (${aliases.map(kebabToTitleCase).join(", ")})`
        }
        return {name, path};
    });
}

/**
 * @param {string[]} paths
 * @return {undefined}
 */
async function addLexicons(paths) {
    const files = await Promise.all(
        paths
            .map(path => {
                const {name} = pathLib.parse(path);
                return {path, name};
            })
            .filter(e => !["README", "words"].includes(e.name))
            .map(async ({path, name}) => {
                const stats = await fsp.lstat(path);
                const isSymlink = stats.isSymbolicLink();
                const realPath = await fsp.realpath(path);
                return {name, realPath, isSymlink};
            }));
    await Promise.all(
        determineNames(files)
            .map(async ({name, path}) => await addLexicon(name, path))
    );
}

async function asyncMain() {
    // await addLexicon("American English", "/usr/share/dict/american-english");
    const [_node, _script, ...args] = process.argv;
    await addLexicons(args);
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
