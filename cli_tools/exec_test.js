#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import transform from './compile_operator_overload.js'
import { execSync } from 'child_process'

const inputTSFile = process.argv[2];
const outputJSFile = inputTSFile.replace('test', 'test_js').replace('.ts', '.js');

console.log('Exec Test START --- File :', inputTSFile);
const inputCode = await fs.readFileSync(inputTSFile, 'utf-8');
const outputCode = transform(inputCode);
console.log('Successfully Finish Compile :', inputTSFile);

console.log('Write Test JavaScript File :', outputJSFile);
fs.writeFileSync(outputJSFile, outputCode);

console.log('--- Exec Test JavaScript File START  -----');
execSync(`node ${outputJSFile}`, { stdio: 'inherit' });
console.log('--- Exec Test JavaScript File FINISH -----');
       
	 



