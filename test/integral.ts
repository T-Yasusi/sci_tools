import integral from '../modules/dist/integral.js'
import { add, sub, mul, div, neg } from '../modules/dist/operators.js'
import { sin } from '../modules/dist/functions.js'

const func = x => sin(x);

console.log(integral.simpson(func, 0, 100));
console.log(integral.gaussKronrod(func, 0, 100));

