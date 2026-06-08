import { add, sub, mul, div } from '../modules/dist/operators.js';
import { Complex, Vector, Matrix, ComplexVector, ComplexMatrix } from '../modules/dist/classes.js';

const mat1 = new Matrix([ 1, 2, 3 ], [ 3, 4, 5 ], [ 6, 7, 8 ]);
const mat2 = new Matrix([ 3, 2, 3 ], [ 2, 4, 5 ], [ 67, 7, 8 ]);
consoleTex(mat1.toLatex(), mat2.toLatex(), '=', (mat1*mat2).toLatex());
console.log('Test');
// console.log('$x = \\sum^{50}_{i = 1}$');
