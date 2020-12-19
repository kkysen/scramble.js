import iterate from "iterare";
import {IteratorWithOperators} from "iterare/lib/iterate";

export interface Range {
    start?: number;
    stop: number;
    step?: number;
}

function* range_iter({start = 0, stop, step = 1}: Range) {
    while (start < stop) {
        yield start;
        start += step;
    }
}

export function range(range: Range): IteratorWithOperators<number> {
    return iterate(range_iter(range));
}
