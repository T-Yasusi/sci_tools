import { Complex, Vector, ComplexVector, Matrix, ComplexMatrix } from '../classes.js'
import { add, sub, mul, div, neg } from '../operators.js'

export default function rungeKutta(
    func: ( y: number | Complex | Vector | ComplexVector, x: number | Complex )=> 
        number | Complex | Vector | ComplexVector,
    y0: number | Complex | Vector | ComplexVector,
    x0: number | Complex,
    dx?: number | Complex,
    nStep: number = 1000
) : { y: number[] | Complex[] | Vector[] | ComplexVector[], x: number[] | Complex[] }
{
    if( dx === undefined ){
        if( typeof x0 === 'number' ) dx = 1.0e-3
        else if( x0 instanceof Complex ) dx = new Complex(1.0e-3, 0);
        else throw new Error('!!! Unsupported x0 type for default dx !!!')
    }
    let y = y0;
    let x = x0;
    const xarr : any[] = [x0];
    const yarr : any[] = [y0];

    for( let i=0; i<nStep; i++ ){
        const k1 = dx * func(y, x);
        const k2 = dx * func(y + 0.5*k1, x + 0.5*dx);
        const k3 = dx * func(y + 0.5*k2, x + 0.5*dx);
        const k4 = dx * func(y + k3, x + dx);

 //       console.log(k1, k2, k3, k4);
        y = y + (k1 + 2*k2 + 2*k3 +k4)/6;
        x = x + dx;
        xarr.push(x);
        yarr.push(y);
    }
    return { y: yarr, x: xarr };
}