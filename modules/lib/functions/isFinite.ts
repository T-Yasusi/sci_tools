import { Complex } from '../Complex.js';

type InputType = number | Complex;

export default function isFinite(x: InputType): boolean {
    if (typeof x === 'number') {
        return Number.isFinite(x);
    }

    if (x instanceof Complex) {
        return (Number.isFinite(x.re) || Number.isFinite(x.im));
    }

    throw new Error('!!! isFinite invalid type !!! ' + typeof x);
}
