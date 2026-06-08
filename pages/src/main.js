import createMonacoEditor from './createMonacoEditor.js'
import babelTransform from './babelTransform.js'

import setCodeTemplate from './setCodeTemplate.js'
setCodeTemplate();

import consoleOutput from './consoleLogHack.js'
window.consoleOutput = consoleOutput; // Globalに定義することで動的ロードされたコードからも使用可能になる

const editor = createMonacoEditor(document.getElementById('editor'));
// editor.setValue('console.log("START"); \nconsole.log("Hello World!!"); \nconsole.log("FINISH");');

document.getElementById("run").addEventListener('click', async (e)=>{
    document.getElementById("output").innerHTML = "";
    
    const code = editor.getValue();
    try{
	const compiledCode = babelTransform(code);
	const blob = new Blob([compiledCode], { type: 'application/javascript' });
	const url = URL.createObjectURL(blob);
	const module = await import(url);
	//	console.log(MathJax);
//	const output=document.getElementById('output');
//	console.log(output.innerHTML);
	MathJax.typeset([ document.getElementById('output') ]);
    } catch(err) {
	console.error('【Runtime Error 】');
        console.error(err);
        console.error('====================');
    }
});

/* ---------- code-template setting -------------------------------------*/
const codeTemplates = document.getElementById('code-template');
codeTemplates.addEventListener('change', async (event)=>{
    const filename = event.target.value
    const code = await fetch(`./${filename}`).then(res=> res.text());
    editor.setValue(code);
});
codeTemplates.dispatchEvent(new Event('change'));
/* ----------------------------------------------------------------------*/
