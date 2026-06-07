// import { Complex, Vector, Matrix, ComplexVector, ComplexMatrix } from '../classes.js'
import Expr from './Expr.js'
import { valueType } from './types.js'

// type valueType = number | Complex | Vector | Matrix | ComplexVector | ComplexMatrix;

export default class Const implements Expr {
    base: valueType;
    exponent: number; 
    
    constructor(base: valueType, exponent: number = 1){
	this.base = base;
	this.exponent = exponent;
    }
    
}
