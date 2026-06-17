import { Complex, Vector, ComplexVector, Matrix, ComplexMatrix } from '../classes.js';
import { add, sub, mul, div, neg } from '../operators.js';
export default function eular(func: (y: number | Complex | Vector | ComplexVector, x: number | Complex) => number | Complex | Vector | ComplexVector, y0: number | Complex | Vector | ComplexVector, x0: number | Complex, dx?: number | Complex, nStep: number = 1000): {
  y: number[] | Complex[] | Vector[] | ComplexVector[];
  x: number[] | Complex[];
} {
  if (dx === undefined) {
    if (typeof x0 === 'number') dx = 1.0e-3;else if (x0 instanceof Complex) dx = new Complex(1.0e-3, 0);else throw new Error('!!! Unsupported x0 type for default dx !!!');
  }
  let y = y0,
    x = x0;
  const yarr: any[] = [y0];
  const xarr: any[] = [x0];
  for (let i = 0; i < nStep; i++) {
    y = add(y, mul(dx, func(y, x)));
    x = add(x, dx);
    yarr.push(y);
    xarr.push(x);
  }
  return {
    y: yarr,
    x: xarr
  };
}