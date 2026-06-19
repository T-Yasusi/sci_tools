import integral from '../../modules/dist/integral.js'
import { laguerre } from '../../modules/dist/specialFunctions.js'
import { add, sub, mul, div, neg } from '../../modules/dist/operators.js'
import { exp, factorial, pow, sqrt } from '../../modules/dist/functions.js'

const N = 10;
const isAllDump = false;
const THRE = 1.0e-8;

for( let i=0; i<N; i++ ){
    for( let j=0; j<N; j++ ){
        const val = integral.zeroToInf(x=> laguerre(i, x) * laguerre(j, x) * exp(-x));
        const correct_val=i===j ? 1 : 0;

        if( isAllDump ){
            console.log(` H_${i} * H_${j} dx =`, val, ' Correct Val =', correct_val);
        }
        else{
            if( Math.abs(val - correct_val) < THRE ) continue;
            console.log(` H_${i} * H_${j} dx =`, val, ' Correct Val =', correct_val);
        }
    }
}
