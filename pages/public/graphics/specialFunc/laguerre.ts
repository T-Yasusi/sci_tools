import { setModal, hslToRGB } from '../modules/util.js'
import { svg } from '../modules/svg.js'

import { add, sub, mul, div, neg, } from '../modules/dist/operators.js'
import { sqrt, exp } from '../modules/dist/functions.js'
import { laguerre } from '../modules/dist/specialFunctions.js'

const { wrapper , modal } = setModal(document.getElementById('display-wrapper'));
const svgTop = svg.setTop(document.getElementById('display'));
const graph = svgTop.makeGraph(0, 5, -1, 1);

const N = 10;

for( let i=0; i<N; i++ ){
    graph.drawFunc(x=> laguerre(i, x)*sqrt(exp(-x))).setAttribute({
        'stroke-width': 2,
        'stroke': hslToRGB(i*360/N, 100, 50)
    });
}
