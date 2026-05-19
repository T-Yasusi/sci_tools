import { defineConfig } from 'vite';

import monacoEditorPluginModule from 'vite-plugin-monaco-editor'
const monacoEditorPlugin = monacoEditorPluginModule;

export default defineConfig({
    base: '/sci_tools/pages/',
    plugins: [
        monacoEditorPlugin({ languageWorkers: ['typescript'] })
    ],
});
