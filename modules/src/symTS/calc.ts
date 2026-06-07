import { add, sub, mul, div, neg } from '../operators.js'
import { pow } from '../functions.js'
import Expr from './Expr.js'
import { Const, Term, Equation } from './classes.js'
import { valueType } from './types.js'

export default function calc(equation: Term | Equation) : valueType {
    let val = 0;
    if( equation instanceof Term ){
	return calcTerm(equation);
    }
    if( equation instanceof Equation ){
	let val = 0;
	for( const term of equation.terms ) val += calcTerm(term);
	return val;
    }

    throw new Error('symTS.calc Invaild Type');
}

function calcTerm(term : Term): any{
    let val = 1;
    for( const item of term.items ){
	if( item instanceof Const ) val *= pow(item.base as valueType, item.exponent);
	else throw new Error('sysTS.calcTerm Invaild Type');
    }
    if( term.sign ) return pow(val, term.exponent);
    if( term.sign ) return -pow(val, term.exponent);
}
