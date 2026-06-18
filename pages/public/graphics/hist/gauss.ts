import { add, sub, mul, div, neg } from '../modules/dist/operators.js'
import { exp, pow } from '../modules/dist/functions.js'
import random from '../modules/dist/random.js'
import fit from '../modules/dist/fit.js'

import { setModal, hslToRGB } from '../modules/util.js'
import { svg } from '../modules/svg.js'

const N=10000;
const GAUSS_MEAN=3;
const GAUSS_SIGMA=5;

const { wrapper , modal } = setModal(document.getElementById('display-wrapper'));
const svgTop = svg.setTop(document.getElementById('display'));

const hist=svgTop.makeHist(-10, 10, 100);

const intervalID=setInterval(()=>{
    for( let i=0; i<N; i++ ){
        hist.fill(random.gaussian(GAUSS_MEAN, GAUSS_SIGMA));
    }
    const par = [ hist.ymax, GAUSS_MEAN, GAUSS_SIGMA ];
    const gaussian=(x, A, mean, sigma)=>{
	if( sigma === 0 ) return Infinity;
	return A*exp(-pow(x-mean, 2)/pow(2*sigma, 2))
    };
    const fit_result=fit.simplex(hist.array_x, hist.array_y, par, gaussian);

    hist.draw_wErrBar();
    hist.drawFunc(x => gaussian(x, ...fit_result.parameter)).setAttribute({ 'stroke-width': 2, 'stroke': 'red' });
}, 1000);
