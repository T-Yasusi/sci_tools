#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import glob from 'fast-glob';

import { transformSync } from '@babel/core';
import syntaxTypeScript from '@babel/plugin-syntax-typescript';
import operatorOverloadPlugin from '../babel_plugins/operator_overload.js';

const inputDir = 'modules/src/';
const outputDir = 'modules/lib/';

const files = await glob(`${inputDir}/**/*.ts`);

for (const inputFile of files) {
    const relativePath = path.relative(inputDir, inputFile);
    const outputFile = path.join(outputDir, relativePath);

    const inputCode = fs.readFileSync(inputFile, 'utf-8');
    const code = transpile(inputCode, inputFile);

    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, code, 'utf-8');

    console.log(`✅ ${inputFile} → ${outputFile}`);
}

function transpile(inputCode, filename='temp.ts'){
    return transformSync(inputCode, {
        filename: filename,
        plugins: [
            syntaxTypeScript,
            operatorOverloadPlugin,
        ],
        sourceType: 'module',
    }).code;
}
