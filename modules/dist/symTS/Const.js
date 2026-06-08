// type valueType = number | Complex | Vector | Matrix | ComplexVector | ComplexMatrix;
export default class Const {
    base;
    exponent;
    constructor(base, exponent = 1) {
        this.base = base;
        this.exponent = exponent;
    }
}
