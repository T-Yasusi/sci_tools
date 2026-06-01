import { Complex } from '../Complex.js';
import { abs } from '../functions.js';
import { add, sub, mul, div, neg } from '../operators.js';
import { gauss_points, gauss_weights, kronrod_points, kronrod_weights } from './gaussKronrod/parameters.js'

const MAX_LOOP = 1000;

export default function gaussKronrod(
    f: ((x: number) => number) | ((x: Complex) => Complex),
    x0: number | Complex,
    x1: number | Complex,
    tol: number = 1.0e-8 
): number | Complex {
    let counter = 0;
    let [ gauss_val, kronrod_val ] = calc(f, x0, x1);
    let ranges = [ x0, x1 ];
    
    while( abs(gauss_val-kronrod_val)>tol ){
	counter ++;
	if( counter >= MAX_LOOP ) throw new Error(`!!! Integral by Gauss Kronrod over Max Iteration : ${MAX_LOOP} !!!`);  
	let new_ranges = [ ranges[0] ];
	for( let i=0; i<ranges.length-1; i++ ){
	    new_ranges.push(ranges[i] + 0.5*(ranges[i+1]-ranges[i]));
	    new_ranges.push(ranges[i+1]); 
	}
	ranges = new_ranges;
	
	gauss_val = 0;
	kronrod_val = 0;
	for( let i=0; i<ranges.length-1; i++ ){
	    const [ v0, v1 ] = calc(f, ranges[i], ranges[i+1]);
	    gauss_val += v0;
	    kronrod_val += v1;
	}
    }
//    console.log('g =', gauss_val, ' k =',kronrod_val);
    
    return kronrod_val;
}

function calc(
    f: ((x: number) => number) | ((x: Complex) => Complex),
    x0: number | Complex,
    x1: number | Complex
): [ number | Complex, number | Complex ]{
    
    const gauss_calc_points = gauss_points.map(a => x0 + (a+1)*(x1-x0)/2);
    const kronrod_calc_points = kronrod_points.map(a => x0 + (a+1)*(x1-x0)/2);
    
    let gauss_val = 0;
    for( let i=0; i<gauss_calc_points.length; i++ ) gauss_val += gauss_weights[i] * f(gauss_calc_points[i]);
  
    let kronrod_val = 0;
    for( let i=0; i<kronrod_calc_points.length; i++ ) kronrod_val += kronrod_weights[i] * f(kronrod_calc_points[i]);

    return [ (x1-x0)*gauss_val/2, (x1-x0)*kronrod_val/2 ];
}
