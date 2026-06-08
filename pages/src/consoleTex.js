export default function (...args){
    const logArea = document.getElementById('output');
    const div = document.createElement('div');

    div.innerHTML += '$$';
    for( const a of args ){
	if( a.toLatex && typeof a.toLatex === 'function' ) div.innerHTML += a.toLatex();
	else div.innerHTML += a;
    }
    div.innerHTML += '$$';

    logArea.appendChild(div);
    MathJax.typeset( [div] );
}
