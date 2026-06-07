import Expr from './Expr.js'

export default class Variables implements Expr {
    name: string;
    constructor(name: string){
	this.name = name;
    }
}
