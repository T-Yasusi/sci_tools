import { add, mul } from '../modules/dist/operators.js'
import { Vector, Matrix } from '../modules/dist/classes.js'

const vec1 = new Vector(1, 2, 3);
const vec2 = new Vector([ 5, 4, 3 ]);

const mat1 = new Matrix([ 1, 2, 3 ],
			[ 4, 5, 6 ],
			[ 7, 8, 9 ]);

const mat2 = new Matrix([ 4, 2, 3 ],
			[ 2, 0, 6 ],
			[ 2, 3, 1 ]);

console.log(vec1);
console.log(vec2);
console.log(mat1);
console.log(mat2);

console.log('vec1 + vec2 =', vec1 + vec2);
console.log('vec1 * vec2 =', vec1 * vec2);

console.log(mat1 * mat2);
