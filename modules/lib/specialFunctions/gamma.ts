import { Complex } from '../Complex.js';
import { add, sub, mul, div, neg } from '../operators.js';
import { factorial, pow, exp, sin } from '../functions.js';
import integral from '../integral.js';
type InputType = number | Complex;
export default function gamma(x: InputType): number | Complex {
  if (typeof x === 'number' && Number.isInteger(x)) {
    if (x <= 0) return Infinity;else return factorial(sub(x, 1)) as number;
  }
  const real = x instanceof Complex ? x.re : x;
  const n0 = Math.floor(Math.abs(real));
  if (x instanceof Complex && Number.isInteger(real) && real <= 0) return Infinity;
  if (real > 0) {
    const n0 = Math.max(0, sub(Math.floor(real), 1));
    const x0 = sub(x, n0);
    let val = integral.zeroToInf((t: InputType) => mul(pow(t, sub(x0 as any, 1)), exp(neg(t)) as any), 1.0e-8);
    let xi = x0;
    for (let i = 0; i < n0; i++) {
      val = mul(val, xi as any);
      xi = add(xi as any, 1);
    }
    return val;
  } else return div(Math.PI, mul(sin(mul(Math.PI, x)), gamma(add(1, x))));
  throw new Error(`!!! specialFunc.gamma Invaild Input Type x = ${typeof x} !!!`);
}