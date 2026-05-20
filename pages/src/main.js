import createMonacoEditor from './createMonacoEditor.js'
import babelTransform from './babelTransform.js'
import setCodeTemplate from './setCodeTemplate.js'

setCodeTemplate();

const editor = createMonacoEditor(document.getElementById('editor'));
console.log(editor);
editor.setValue('import hoge from "./hoge.js" \n console.log("Hello World!!") \n a + b');

document.getElementById("run").addEventListener('click', async (e)=>{
    const code = editor.getValue();
    console.log('aaa', code);
    try{
	const jsCode = babelTransform(code);
	console.log('bbb', jsCode)
    } catch(err) {
	console.log('Babel Transpile Error');
    }
});


console.log("main process START")

