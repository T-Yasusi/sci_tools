import { add, sub, mul, div, neg } from '../modules/dist/operators.js'
import { sin, cos, exp, log, pow, sqrt } from '../modules/dist/functions.js'
import integral from '../modules/dist/integral.js'

console.log('===== Improper Integration Test START  =====');
console.log('∫[0:∞] exp(-x^2) dx =',     integral.minusInfToInf(x=> exp(-x*x)), ' correct val =', sqrt(Math.PI));
console.log('∫[0:∞] exp(-x^4) dx =',     integral.minusInfToInf(x=> exp(-x*x*x*x)), ' correct val =', 1.812804954110954);
console.log('∫[0:∞] 1/(x+1)^2 dx =',     integral.zeroToInf(x=> 1/pow(x+1, 2)), ' correct val =', 1.0);
console.log('∫[0:∞] exp(x) dx =',        integral.zeroToInf(x=> exp(-x)), ' correct val =', 1.0);
console.log('∫[-1:1] 1/sqrt(x+1) dx =',  integral.minusOneToOne(x=> 1/sqrt(x+1)), ' correct val =', 2.0*sqrt(2));
console.log('∫[-1:1] 1/sqrt(1-x^2)dx =', integral.minusOneToOne(x=> 1/sqrt(1-x*x)), ' correct val =', Math.PI);
console.log('===== Improper Integration Test FINISH =====');
