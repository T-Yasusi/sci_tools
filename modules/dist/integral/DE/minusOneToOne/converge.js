import trapezoid from '../../trapezoid.js';
import { add, sub, mul, div, neg } from '../../../operators.js';
import { abs } from '../../../functions.js';
export default function converge(g, threshold) {
    let max_range = 3;
    try {
        while (!Number.isFinite(abs(g(neg(max_range)))) || !Number.isFinite(abs(g(max_range)))) {
            max_range = mul(1.2, max_range);
            if (max_range < 1.0e-3)
                throw new Error('!!! integral.minusOneToOne not converged function !!!');
        }
    }
    catch (e) {
        max_range = div(max_range, 1.2);
    }
    //    console.log('max_range :', max_range);
    let range = mul(0.1, max_range);
    const step = range;
    let val0 = trapezoid(g, neg(range), range);
    range = add(range, step);
    let val1 = trapezoid(g, neg(range), range);
    while (abs(sub(val0, val1)) > threshold) {
        range = add(range, step);
        if (!Number.isFinite(g(neg(range))) || !Number.isFinite(g(range)))
            throw new Error('!!! integral.minusInfToInf not converged !!!');
        val0 = val1;
        val1 = trapezoid(g, neg(range), range);
        //       console.log(range, val0, val1);
    }
    return val1;
}
