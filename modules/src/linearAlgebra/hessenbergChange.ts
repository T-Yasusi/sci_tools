import { Complex } from '../Complex.js'
import Matrix from '../Matrix.js'
import ComplexMatrix from '../ComplexMatrix.js'
import { add, sub, mul, div, neg } from '../operators.js'
import { createUnitMatrix, createUnitComplexMatrix } from './createUnitMatrix.js'
import { abs, exp } from '../functions.js';

export default function hessenbergChange(mat: Matrix | ComplexMatrix ): Matrix | ComplexMatrix
{
    if( mat.cols !== mat.rows ) throw new Error("!!! Householder QR decomposition  not Square Matrix !!!");

    if( mat instanceof Matrix ){
        let A = new Matrix(...mat);
        for( let i=0; i<mat.cols-1; i++ ){
            let v = A.colVector(i);
            for( let j=0; j<=i; j++ ) v[j]= 0;
            if( v.norm() === 0 ) continue;

            v[i+1] = v[i+1]>=0 ? v[i+1]+v.norm() : v[i+1]-v.norm();
            v = v.normalize();

            const H = createUnitMatrix(A.cols);
            for( let j=i+1; j<A.cols; j++ ){
                for( let k=i+1; k<A.cols; k++ ) H[j][k] = H[j][k]-2*v[j]*v[k];
            }
            
            A =  H*A*H.transpose();
        }
        return A;
    }
    if( mat instanceof ComplexMatrix ){
        let A = new ComplexMatrix(...mat);
        for( let i=0; i<mat.cols-1; i++ ){
            let v = A.colVector(i);
            for( let j=0; j<=i; j++ ) v[j]= new Complex(0, 0);
            if( v.norm() === 0 ) continue;

            v[i+1] =  v[i+1] + exp(new Complex(0, 1)*v[i+1].arg())*v.norm();
            v = v.normalize();

            const H = createUnitComplexMatrix(A.cols);
            for( let j=i+1; j<A.cols; j++ ){
                for( let k=i+1; k<A.cols; k++ ) H[j][k] = H[j][k]-2*v[j]*v[k].conj();
            }
            
            A =  H*A*H.conj();
        }
        return A;
    }
    throw new Error('!!! hessenbergChange Invaild type !!!');
}