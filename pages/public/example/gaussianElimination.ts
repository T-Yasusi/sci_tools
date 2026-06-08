import { Complex, Vector, Matrix, ComplexVector, ComplexMatrix } from '../modules/dist/classes.js';
import { add, sub, mul, div, neg } from '../modules/dist/operators.js';
import { gaussianElimination } from '../modules/dist/linearAlgebra.js';

const cmat = new ComplexMatrix(
   [ new Complex(1, 1), new Complex(2, 3), new Complex(3, -4) ],
   [ new Complex(2, 1), new Complex(2, 2), new Complex(2, -4) ],
   [ new Complex(0, 1), new Complex(3, -2), new Complex(5, -4) ] );

const rev = gaussianElimination(cmat);

consoleTex(cmat, '^{-1} = ', rev);
consoleTex(cmat, rev, ' = ', cmat*rev);
