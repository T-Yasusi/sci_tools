import Expr from './Expr.js'

export default class Term implements Expr {
    items: Expr[];
    sign: boolean; // true: +, false: -;
    exponent: number;
    
    constructor(items: Expr[], sign: boolean = true, exponent: number = 1){
	this.items = items;
	this.sign = sign;
	this.exponent = exponent;
    }
}
