import { Complex } from '../Complex.js';
import { sub, mul } from '../operators.js';
import { pow } from '../functions.js';
import integral from '../integral.js';
export default function beta(x, y) {
    const x_re = x instanceof Complex ? x.re : x;
    const y_re = y instanceof Complex ? y.re : y;
    if (x_re <= 0 || y_re <= 0)
        throw new Error(`specialFunctions.beta(x, y) should be Re(x) > 0 && Re(y) > 0`);
    return integral.simpson((t) => mul(pow(t, sub(x, 1)), pow(sub(1, t), sub(y, 1))), 0, 1);
}
