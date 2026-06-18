export default function(...args){
    const logArea = document.getElementById('output');
    const div = document.createElement('div');

    for( const a of args ){
	div.innerHTML += typeof a === 'object' ? JSON.stringify(a) : String(a)+' ';
    }
    logArea.appendChild(div);
}
