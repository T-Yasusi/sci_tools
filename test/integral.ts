import { add, sub, mul, div, neg } from '../modules/dist/operators.js'
import { sin, cos } from '../modules/dist/functions.js'
import integral from '../modules/dist/integral.js'

const func = x => sin(x);
const primitiveFunc = x => 1-cos(x);

console.log('===== Numeric Integral Test START  ==========');
console.log('           | Trapezoid | Simpson  | gaussKrond | Correct ');
for( let x=0; x<10; x += 0.1 ){
    console.log('x =', x.toFixed(3), ' |',
		integral.trapezoid(func, 0, x).toFixed(5),    '  |',
		integral.simpson(func, 0, x).toFixed(5),      ' |',
		integral.gaussKronrod(func, 0, x).toFixed(5), '   |',
		primitiveFunc(x).toFixed(5));
}
console.log('===== Numeric Integral Test FINISH ==========');


