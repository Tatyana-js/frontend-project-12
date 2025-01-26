import globals from "globals";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,jsx}"]},
  {ignores: ["/node_modules/", "dist/"] },
  {languageOptions: {
    ecmaVersion: "latest",
    globals: globals.browser,
    sourceType: 'module',
   }},
  {settings: { react: { version: '18.3' } }},
  pluginReact.configs.flat.recommended,
  {rules: 
    {semi: "error",
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'},
  },
];
