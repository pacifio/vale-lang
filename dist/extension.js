/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("vscode");;

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.activate = void 0;
const vscode = __webpack_require__(1);
function activate(context) {
    const variables = [];
    const provider = vscode.languages.registerCompletionItemProvider('Vale', {
        provideCompletionItems(_document, _position) {
            const completions = [
                // Keywords
                new vscode.CompletionItem('as', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('else', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('fn', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('for', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('if', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('imm', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('impl', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('infer-ret', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('inl', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('mat', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('mut', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('nad', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('not', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('or', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('ret', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('yot', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('abstract', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('destruct', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('drop', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('interface', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('rules', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('sealed', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('struct', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('this', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('virtual', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('weakable', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('export', vscode.CompletionItemKind.Keyword),
                new vscode.CompletionItem('extern', vscode.CompletionItemKind.Keyword),
                // language
                new vscode.CompletionItem('true', vscode.CompletionItemKind.Constant),
                new vscode.CompletionItem('false', vscode.CompletionItemKind.Constant),
                // data types
                new vscode.CompletionItem('str', vscode.CompletionItemKind.Class),
                new vscode.CompletionItem('int', vscode.CompletionItemKind.Class),
                new vscode.CompletionItem('bool', vscode.CompletionItemKind.Class),
                new vscode.CompletionItem('Array', vscode.CompletionItemKind.Class),
                new vscode.CompletionItem('void', vscode.CompletionItemKind.Constant),
                // functions
                new vscode.CompletionItem('print', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('println', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('each', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('indices', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('str', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('int', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('not', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('and', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('or', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('mod', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('len', vscode.CompletionItemKind.Method),
            ];
            if (variables.length > 0) {
                variables.forEach((item, _index) => {
                    completions.push(new vscode.CompletionItem(item, vscode.CompletionItemKind.Variable));
                });
            }
            return completions;
        }
    });
    const varProvider = vscode.languages.registerCompletionItemProvider('Vale', {
        provideCompletionItems(document, position) {
            const linePrefix = document.lineAt(position).text.substr(0, position.character);
            if (linePrefix.endsWith('=')) {
                var item = linePrefix.replace('=', '').trim();
                if (!variables.includes(item)) {
                    variables.push(item);
                }
            }
            return undefined;
        }
    }, '=');
    context.subscriptions.push(provider, varProvider);
}
exports.activate = activate;

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=extension.js.map