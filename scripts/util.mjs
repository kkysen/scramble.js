/**
 *
 * @param {string} s
 * @return {string}
 */
export function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

/**
 *
 * @param {string} s
 * @return {string}
 */
export function kebabToTitleCase(s) {
    return s.split("-").map(capitalize).join(" ");
}
