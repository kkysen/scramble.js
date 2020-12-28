import * as child_process from "child_process";
import {promises as fsp} from "fs";
import pathLib from "path";
import {main} from "./run.mjs";
import {kebabToTitleCase} from "./util";


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
 * @return {void}
 */
async function addLexicons(paths) {
    const files = await Promise.all(
        paths
            .map(path => {
                const {name, ext} = pathLib.parse(path);
                return {path, name, ext};
            })
            .filter(e => !e.ext && !["README", "words"].includes(e.name))
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

main(async (args) => {
    await addLexicons(args);
})()
