import { Complex } from '../Complex.js'
import Matrix from '../Matrix.js'
import ComplexMatrix from '../ComplexMatrix.js'
import { add, sub, mul, div, neg } from '../operators.js'
import { createUnitMatrix, createUnitComplexMatrix } from './createUnitMatrix.js'
import { abs, exp } from '../functions.js';

export default function householderQR(mat: Matrix | ComplexMatrix ):
    { Q: Matrix | ComplexMatrix; R: Matrix | ComplexMatrix }
{
    if( mat.cols !== mat.rows ) throw new Error("!!! Householder QR decomposition  not Square Matrix !!!");
    console.log('Input =\n', mat.toPrecision(3));

    if( mat instanceof Matrix ){
        let R = new Matrix(...mat);
        let Q = createUnitMatrix(mat.cols);
        for( let i=0; i<mat.cols-1; i++ ){
            let v = R.colVector(i);
            for( let j=0; j<i; j++ ) v[j]= 0;

            if( v.norm() === 0 ) continue;
            v[i] = v[i]>=0 ? v[i]+v.norm() : v[i]-v.norm();

            v = v.normalize();
            let H = -2*v.outerProduct(v);
            for( let i=0; i<mat.cols; i++ ) H[i][i] = H[i][i]+1;

            R = H*R;
            Q = Q*H;

            return {Q, R};
        }
    } else if( mat instanceof ComplexMatrix ){
        let R = new ComplexMatrix(...mat);
        let Q = createUnitComplexMatrix(mat.cols);
        for( let i=0; i<mat.cols-1; i++ ){
            let v = R.colVector(i);
            for( let j=0; j<i; j++ ) v[j]= new Complex(0, 0);

            if( v.norm() === 0 ) continue;
            v[i] =  v[i] + exp(new Complex(0, 1)*v[i].arg())*v.norm();

            v = v.normalize();
            let H = -2*v.outerProduct(v);
            for( let i=0; i<mat.cols; i++ ) H[i][i] = H[i][i]+1;

            R = H*R;
            Q = Q*H.conj();
        }
        return { Q, R };
    }
    throw new Error('!!! householderQR Invaild type !!!');
//    console.log('====== FINISH =======');
//    if( mat instanceof Matrix ) console.log('Q^T*Q =\n', (Q.transpose()*Q).toPrecision(3));
//    else console.log('Q^T*Q =\n', ((Q as ComplexMatrix).conj()*Q).toPrecision(3));
//    console.log('Input =\n', mat.toPrecision(3));
//    console.log('Q*R =\n', (Q*R).toPrecision(3));
}