import { Complex, Vector, Matrix, ComplexVector, ComplexMatrix } from '../modules/dist/classes.js';

const mat = new Matrix([ 1, 2, 3 ], [ 3, 4, 5 ], [ 6, 7, 8 ]);
console.log(mat.toLatex());
// console.log('$x = \\sum^{50}_{i = 1}$');
