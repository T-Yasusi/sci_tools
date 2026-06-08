import { Complex } from './classes.js';
import { toFormattedPrecision } from './util/toFormattedPrecision.js';
export default function toLatex(input, precision = 1) {
    if (typeof input === 'number')
        return toFormattedPrecision(input, precision);
    if (input instanceof Complex)
        return input.toPrecision(precision);
    throw new Error(`!!! toLatex Invalid type : ${typeof input}!!!`);
}
