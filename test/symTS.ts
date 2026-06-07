import { add, sub, mul, div } from '../modules/dist/operators.js'
import { sqrt } from '../modules/dist/functions.js'
import { Const, Term, Equation } from '../modules/dist/symTS/classes.js'
import symTS from '../modules/dist/symTS.js'

const equation = new Equation([ new Term([ new Const(3, 1/2), new Const(Math.PI) ]),
				new Term([ new Const(2, 0.5), new Const(Math.exp(1), 1/2) ]) ]);

console.log('val :', sqrt(3)*Math.PI+sqrt(2)*sqrt(Math.exp(1)));
console.log('val :', symTS.calc(equation));
