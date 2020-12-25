import * as child_process from "child_process";
import {promises as fsp} from "fs";
import pathLib from "path";


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
            name += ` (${aliases.map(kebabToTitleCase).join(", ")})`;
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
    const {dir} = pathLib.parse(new URL(import.meta.url).pathname);
    await Promise.all(
        determineNames(files)
            .map(async ({name, path}) => {
                const child = child_process.fork(pathLib.join(dir, "addLexicon.mjs"), [name, path]);
                return new Promise(((resolve, reject) => {
                    child.on("exit", resolve);
                    child.on("error", reject);
                }));
            })
    );
}

async function asyncMain() {
    // eslint-disable-next-line no-unused-vars
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
