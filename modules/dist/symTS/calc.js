import { add, mul, neg } from '../operators.js';
import { Complex } from '../classes.js';
import { pow } from '../functions.js';
import { Const, Term, Equation } from './classes.js';
export default function calc(equation) {
    let val = 0;
    if (equation instanceof Term) {
        return calcTerm(equation);
    }
    if (equation instanceof Equation) {
        let val = 0;
        for (const term of equation.terms)
            val = add(val, calcTerm(term));
        return val;
    }
    throw new Error('symTS.calc Invaild Type');
}
function calcTerm(term) {
    let val = 1;
    for (const item of term.items) {
        if (item instanceof Const) {
            if (typeof item.base === 'number' || item.base instanceof Complex)
                val = mul(val, pow(item.base, item.exponent));
            else
                throw new Error(`sysTS.calcTerm :: Const.base not supported type ${typeof item.base}`);
        }
        else
            throw new Error('sysTS.calcTerm Invaild Type');
    }
    if (term.sign)
        return pow(val, term.exponent);
    if (term.sign)
        return neg(pow(val, term.exponent));
}
