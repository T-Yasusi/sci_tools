import { Complex } from '../Complex.js';
import { add, sub, mul, div, neg } from '../operators.js';
import { factorial, pow, exp, sin } from '../functions.js'
import integral from '../integral.js'

type InputType = number | Complex;

export default function gamma(x: InputType): number | Complex {
    if( typeof x === 'number' && Number.isInteger(x) ){
	if( x <= 0 ) return Infinity;
	else return factorial(x-1) as number;
    }

    const real = x instanceof Complex ? x.re : x;
    const n0 = Math.floor(Math.abs(real));
    
    if (x instanceof Complex && Number.isInteger(real) && real <= 0) return Infinity;
    
    if (real > 0) {
        const n0 = Math.max(0, Math.floor(real) - 1);
        const x0 = x - n0;

        let val = integral.zeroToInf( (t: InputType) => pow(t, (x0 as any) - 1) * (exp(-t) as any), 1.0e-8 );
        let xi = x0;
        for (let i = 0; i < n0; i++) {
            val *= xi as any;
            xi  = (xi as any) + 1;
        }
        return val;
    }
    else return Math.PI/(sin(Math.PI*x)*gamma(1+x));
    
    throw new Error(`!!! specialFunc.gamma Invaild Input Type x = ${typeof x} !!!`);
}
