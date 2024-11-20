import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    console.log("Extension activée");

    const hoverProvider = vscode.languages.registerHoverProvider('*', {
        async provideHover(document, position, token) {
            const range = document.getWordRangeAtPosition(position, /import\s+.*\s+from\s+['"].*['"]/);
            if (range) {
                const lineText = document.lineAt(position).text;
                const match = lineText.match(/import\s+.*\s+from\s+['"](.*)['"]/);
                if (match && match[1]) {
                    const packageName = match[1];
                    console.log("Package name:", packageName);

                    try {
                        const readmeContent = await getReadmeContent(packageName);
                        return new vscode.Hover(`### README de ${packageName}\n\n${readmeContent}`);
                    } catch (error) {
                        console.error("Erreur lors de la récupération du README:", error);
                        return new vscode.Hover(`Impossible de récupérer le README pour ${packageName}`);
                    }
                }
            }
            return null;
        }
    });

    context.subscriptions.push(hoverProvider);
}

async function getReadmeContent(packageName: string): Promise<string> {
    const url = `https://registry.npmjs.org/${packageName}`;
    const response = await axios.get(url);
    const readme = response.data.readme;
    return readme ? readme : "README non disponible";
}

export function deactivate() {
    console.log("Extension désactivée");
}