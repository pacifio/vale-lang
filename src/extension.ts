import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	const provider = vscode.languages.registerCompletionItemProvider('Vale', {
		provideCompletionItems(_document: vscode.TextDocument, _position: vscode.Position) {
			return [
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
		}
	});

	context.subscriptions.push(provider);
}
