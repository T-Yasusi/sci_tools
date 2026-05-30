import { Complex } from '../Complex.js';
import { abs } from '../functions.js';
import { add, sub, mul, div, neg } from '../operators.js';
import { gauss_points, gauss_weights, kronrod_points, kronrod_weights } from './gaussKronrod/parameters.js';
const MAX_LOOP = 1000;
export default function gaussKronrod(f: ((x: number) => number) | ((x: Complex) => Complex), x0: number | Complex, x1: number | Complex, tol: number = 1.0e-8): number | Complex {
  let counter = 0;
  let [gauss_val, kronrod_val] = calc(f, x0, x1);
  let ranges = [x0, x1];
  while (abs(sub(gauss_val, kronrod_val)) > tol) {
    counter++;
    if (counter >= MAX_LOOP) throw new Error(`!!! Integral by Gauss Kronrod over Max Iteration : ${MAX_LOOP} !!!`);
    let new_ranges = [ranges[0]];
    for (let i = 0; i < sub(ranges.length, 1); i++) {
      new_ranges.push(add(ranges[i], mul(0.5, sub(ranges[add(i, 1)], ranges[i]))));
      new_ranges.push(ranges[add(i, 1)]);
    }
    ranges = new_ranges;
    gauss_val = 0;
    kronrod_val = 0;
    for (let i = 0; i < sub(ranges.length, 1); i++) {
      const [v0, v1] = calc(f, ranges[i], ranges[add(i, 1)]);
      gauss_val = add(gauss_val, v0);
      kronrod_val = add(kronrod_val, v1);
    }
  }
  //    console.log('g =', gauss_val, ' k =',kronrod_val);

  return kronrod_val;
}
function calc(f: ((x: number) => number) | ((x: Complex) => Complex), x0: number | Complex, x1: number | Complex): [number | Complex, number | Complex] {
  const gauss_calc_points = gauss_points.map(a => add(x0, div(mul(add(a, 1), sub(x1, x0)), 2)));
  const kronrod_calc_points = kronrod_points.map(a => add(x0, div(mul(add(a, 1), sub(x1, x0)), 2)));
  let gauss_val = 0;
  for (let i = 0; i < gauss_calc_points.length; i++) gauss_val = add(gauss_val, mul(gauss_weights[i], f(gauss_calc_points[i])));
  let kronrod_val = 0;
  for (let i = 0; i < kronrod_calc_points.length; i++) kronrod_val = add(kronrod_val, mul(kronrod_weights[i], f(kronrod_calc_points[i])));
  return [div(mul(sub(x1, x0), gauss_val), 2), div(mul(sub(x1, x0), kronrod_val), 2)];
}