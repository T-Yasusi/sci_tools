import { Complex } from '../Complex.js';
import { add, sub, mul, div, neg } from '../operators.js';
import { factorial, pow, exp } from '../functions.js'
import integral from '../integral.js'

type InputType = number | Complex;

export default function gamma(x: InputType): number | Complex {
    if( typeof x === 'number' ){
	if( Number.isInteger(x) ){
	    if( x <= 0 ) return Infinity;
	    else return factorial(x-1) as number;
	}
    }
    const real = x instanceof Complex ? x.re : x;
    const absReal = Math.abs(real);
    const n0 = Math.floor(absReal);

    if( 1 <= real ){
        let x0 = x - n0 + 1;
//      console.log(x, x0, n0);
        let val=integral.zeroToInf( (t: InputType) => pow(t, x0-1)*exp(-t) );
        for( let i=1; i<n0; i++ ){
            val *= x0
            x0 += 1;
        }
        return val;
    }
    else{
        let x0 = n0 - x + 1;
	console.log(x, x0, n0);
        let val=integral.zeroToInf( (t: InputType) => pow(t, x0-1)*exp(-t) );

        for( let i=0; i<n0+2; i++ ){	    
	    x0 -= 1;
	    val = val/x0;
        }
        return val;
    }

    throw new Error(`!!! specialFunc.gamma Invaild Input Type x = ${typeof x} !!!`);
}
