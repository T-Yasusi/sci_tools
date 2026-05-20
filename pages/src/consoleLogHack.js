export default function(...args){
    const logArea = document.getElementById('output');

    const msg = args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ');
    if (logArea) {
        logArea.innerText += msg + '\n';
    }
}
