#!/usr/bin/env node
import { transformSync } from '@babel/core';
import syntaxTypeScript from '@babel/plugin-syntax-typescript';
import operatorOverloadPlugin from '../babel_plugins/operator_overload.js'

export default (inputCode, filename='tmp.ts') => {
    return transformSync(inputCode, {
	'filename': filename,
	plugins: [
	    syntaxTypeScript,
	    operatorOverloadPlugin,
	],
	sourceType: 'module',	
    }).code;
}


