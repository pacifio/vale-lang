(()=>{"use strict";var e={549:e=>{e.exports=require("vscode")}},o={};function t(n){var m=o[n];if(void 0!==m)return m.exports;var i=o[n]={exports:{}};return e[n](i,i.exports,t),i.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.activate=void 0;const o=t(549);e.activate=function(e){const t=[],n=o.languages.registerCompletionItemProvider("Vale",{provideCompletionItems(e,n){const m=[new o.CompletionItem("as",o.CompletionItemKind.Keyword),new o.CompletionItem("else",o.CompletionItemKind.Keyword),new o.CompletionItem("fn",o.CompletionItemKind.Keyword),new o.CompletionItem("for",o.CompletionItemKind.Keyword),new o.CompletionItem("if",o.CompletionItemKind.Keyword),new o.CompletionItem("imm",o.CompletionItemKind.Keyword),new o.CompletionItem("impl",o.CompletionItemKind.Keyword),new o.CompletionItem("infer-ret",o.CompletionItemKind.Keyword),new o.CompletionItem("inl",o.CompletionItemKind.Keyword),new o.CompletionItem("mat",o.CompletionItemKind.Keyword),new o.CompletionItem("mut",o.CompletionItemKind.Keyword),new o.CompletionItem("nad",o.CompletionItemKind.Keyword),new o.CompletionItem("not",o.CompletionItemKind.Keyword),new o.CompletionItem("or",o.CompletionItemKind.Keyword),new o.CompletionItem("ret",o.CompletionItemKind.Keyword),new o.CompletionItem("yot",o.CompletionItemKind.Keyword),new o.CompletionItem("abstract",o.CompletionItemKind.Keyword),new o.CompletionItem("destruct",o.CompletionItemKind.Keyword),new o.CompletionItem("drop",o.CompletionItemKind.Keyword),new o.CompletionItem("interface",o.CompletionItemKind.Keyword),new o.CompletionItem("rules",o.CompletionItemKind.Keyword),new o.CompletionItem("sealed",o.CompletionItemKind.Keyword),new o.CompletionItem("struct",o.CompletionItemKind.Keyword),new o.CompletionItem("this",o.CompletionItemKind.Keyword),new o.CompletionItem("virtual",o.CompletionItemKind.Keyword),new o.CompletionItem("weakable",o.CompletionItemKind.Keyword),new o.CompletionItem("export",o.CompletionItemKind.Keyword),new o.CompletionItem("extern",o.CompletionItemKind.Keyword),new o.CompletionItem("true",o.CompletionItemKind.Constant),new o.CompletionItem("false",o.CompletionItemKind.Constant),new o.CompletionItem("str",o.CompletionItemKind.Class),new o.CompletionItem("int",o.CompletionItemKind.Class),new o.CompletionItem("bool",o.CompletionItemKind.Class),new o.CompletionItem("Array",o.CompletionItemKind.Class),new o.CompletionItem("void",o.CompletionItemKind.Constant),new o.CompletionItem("print",o.CompletionItemKind.Method),new o.CompletionItem("println",o.CompletionItemKind.Method),new o.CompletionItem("each",o.CompletionItemKind.Method),new o.CompletionItem("indices",o.CompletionItemKind.Method),new o.CompletionItem("str",o.CompletionItemKind.Method),new o.CompletionItem("int",o.CompletionItemKind.Method),new o.CompletionItem("not",o.CompletionItemKind.Method),new o.CompletionItem("and",o.CompletionItemKind.Method),new o.CompletionItem("or",o.CompletionItemKind.Method),new o.CompletionItem("mod",o.CompletionItemKind.Method),new o.CompletionItem("len",o.CompletionItemKind.Method)];return t.length>0&&t.forEach(((e,t)=>{m.push(new o.CompletionItem(e,o.CompletionItemKind.Variable))})),m}}),m=o.languages.registerCompletionItemProvider("Vale",{provideCompletionItems(e,o){const n=e.lineAt(o).text.substr(0,o.character);if(n.endsWith("=")){var m=n.replace("=","").trim();t.includes(m)||t.push(m)}}},"=");e.subscriptions.push(n,m)}})(),module.exports=n})();