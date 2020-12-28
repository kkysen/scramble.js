export function isUndefined<T>(t: T | undefined): t is undefined {
    return t === undefined;
}

export function isNull<T>(t: T | null): t is null {
    return t === null;
}

export function isNotUndefined<T>(t: T | undefined): t is T {
    return t !== undefined;
}

export function isNotNull<T>(t: T | null): t is T {
    return t !== null;
}

export function isNullish<T>(t: T | null | undefined): t is null | undefined {
    return isUndefined(t) || isNull(t);
}

export function isNotNullish<T>(t: T | null | undefined): t is T {
    return isNotUndefined(t) && isNotNull(t);
}

export function isBoolean(b: unknown): b is boolean {
    return typeof b === "boolean";
}

export function isNumber(n: unknown): n is number {
    return typeof n === "number";
}

export function isBigInt(n: unknown): n is bigint {
    return typeof n === "bigint";
}

export function isString(s: unknown): s is string {
    return typeof s === "string";
}
