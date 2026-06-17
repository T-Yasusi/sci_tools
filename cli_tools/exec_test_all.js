#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process'
import glob from 'fast-glob';

import files from  './test_files.js'
// const files = await glob(`test/**/*.ts`);

for( const inputTSFile of files ){
    const outputJSFile = inputTSFile.replace('test', 'test_js').replace('.ts', '.js');

    console.log('Exec Test START --- File :', inputTSFile);
    const inputCode = await fs.readFileSync(inputTSFile, 'utf-8');
    const outputCode = transpile(inputCode);
    console.log('Successfully Finish Compile :', inputTSFile);
    
    console.log('Write Test JavaScript File :', outputJSFile);
    fs.writeFileSync(outputJSFile, outputCode);

    console.log('--- Exec Test JavaScript File START  -----');
    execSync(`node ${outputJSFile}`, { stdio: 'inherit' });
    console.log('--- Exec Test JavaScript File FINISH -----');
}

// ============= Transpiler Setting =====================//
import { transformSync } from '@babel/core';
import presetTypeScript from '@babel/preset-typescript';
import operatorOverloadPlugin from '../babel_plugins/operator_overload.js';

function transpile(inputCode, filename='tmp.ts'){
    return transformSync(inputCode, {
        'filename': filename,
        plugins: [ operatorOverloadPlugin ],
	presets: [
            [ presetTypeScript, {
		onlyRemoveTypeImports: true
            }]
        ],
        sourceType: 'module',
    }).code;
}







