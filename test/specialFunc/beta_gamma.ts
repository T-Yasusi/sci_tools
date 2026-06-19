import { Complex } from '../../modules/dist/Complex.js'
import { beta, gamma } from '../../modules/dist/specialFunctions.js'
import { add, sub, mul, div, neg } from '../../modules/dist/operators.js'

const z1 = new Complex(1.5, 2);
const z2 = new Complex(3.3, 2);
// const z1 = 0.5;
// const z2 = 4.5;

console.log(gamma(-0.5));

console.log('B(z1, z2) = ', beta(z1, z2));
console.log('Γ(z1)Γ(z2)/Γ(z1+z2) = ', gamma(z1)*gamma(z2)/gamma(z1+z2));
