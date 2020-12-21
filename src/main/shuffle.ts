export function shuffle<T>(a: T[]) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}

export function shuffled<T>(a: readonly T[]): T[] {
    const b = [...a];
    shuffle(b);
    return b;
}

export function shuffledString(s: string): string {
    const a = [...s];
    shuffle(a);
    return a.join("");
}
