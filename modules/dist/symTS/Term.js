export default class Term {
    items;
    sign; // true: +, false: -;
    exponent;
    constructor(items, sign = true, exponent = 1) {
        this.items = items;
        this.sign = sign;
        this.exponent = exponent;
    }
}
