import Expr from './Expr.js'
import Term from './Term.js'

export default class Equation implements Expr {
    terms: Term[];
    
    constructor(terms: Term[]){
	this.terms = terms;
    }
    
}
