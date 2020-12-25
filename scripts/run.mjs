/**
 * @param {function(string[]): Promise<void>} asyncMain
 * @return {function(): void}
 */
export function main(asyncMain) {
    return () => {
        // eslint-disable-next-line
        const [_node, _script, ...args] = process.argv;
        (async () => {
            try {
                await asyncMain(args);
            } catch (e) {
                console.error(e);
                process.exit(1);
            }
        })();
    };
}
