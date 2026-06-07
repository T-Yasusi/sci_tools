import { add, sub, mul, div } from '../modules/dist/operators.js'
import { sin, cos, tan } from '../modules/dist/functions.js'
import diff from '../modules/dist/diff.js'

const func  = x => sin(x);
const dfunc = x => cos(x);

console.log('===== Numberic Difference Test START  =====');
console.log('           | forward  | backward | central  | Correct');    
for( let x=0; x<2*Math.PI; x += 0.1 ){
    console.log('x =', x.toFixed(3), ' |',
		diff.forward(func, x).toFixed(5),  ' |',
		diff.backward(func, x).toFixed(5), ' |',
		diff.central(func, x).toFixed(5),  ' |',
		dfunc(x).toFixed(5));
}
console.log('===== Numberic Difference Test FINISH =====');
