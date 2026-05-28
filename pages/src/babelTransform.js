import * as Babel from '@babel/standalone';
import operatorOverloadPlugin from '../../babel_plugins/operator_overload.js';
import transformStaticImportToDynamic from '../../babel_plugins/transform-static-import-to-dynamic.js';

export default function(code, fileName = 'file.ts'){
    try{
	const transpiledCode = Babel.transform(code, {
            presets: [ 'typescript' ],
            plugins: [ operatorOverloadPlugin,
                       transformStaticImportToDynamic ],
	    sourceMaps: 'inline',
            filename: fileName,
	}).code;	
	return transpiledCode.replace(/\bconsole\.log\s*\(/g, 'consoleOutput(');
    } catch(err){
	console.error('===== 【Transpile Error 】=====');
	console.error(err);
	console.error('===============================');
    }
}
