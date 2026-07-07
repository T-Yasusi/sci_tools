import { Complex } from '../Complex.js';
import { add, sub, mul, div, neg } from '../operators.js';
import { pow} from '../functions.js'
import integral from '../integral.js'

type InputType = number | Complex;

export default function beta(x: InputType, y: InputType): number | Complex {
    const x_re = x instanceof Complex ? x.re : x;
    const y_re = y instanceof Complex ? y.re : y;
    if( x_re <= 0 || y_re <= 0 ) throw new Error(`specialFunctions.beta(x, y) should be Re(x) > 0 && Re(y) > 0`)
    
    return 0.5*integral.minusOneToOne( (t: number) => pow(0.5*t+0.5, x-1) * pow(0.5-0.5*t, y-1) );
}
