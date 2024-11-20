# Show README

This Visual Studio Code extension displays the content of a package's README file when you hover over the package name.

## Features

- Displays the content of a package's README file in a popup when you hover over the package name in an import statement.

## Installation

1. Install the extension from the [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/vscode).
2. Open a project containing JavaScript or TypeScript files.
3. Hover over the name of a package in an import statement to display the content of the README file.

## Usage

1. Open a JavaScript or TypeScript file in Visual Studio Code.
2. Hover over the name of a package in an import statement, for example:
```javascript
import axios from 'axios';
```
3. A popup will appear with the content of the package's README file.

## Dependencies

- axios: Used to make HTTP requests to fetch the README content from the npm registry.
- marked: Used to convert the Markdown content of the README to HTML.

## Contributing

Contributions are welcome! If you would like to contribute to this extension, please follow these steps:

1. Fork this repository.
2. Create a branch for your feature (git checkout -b feature/my-feature).
3. Commit your changes (git commit -am 'Add my feature').
4. Push your branch (git push origin feature/my-feature).
5. Open a Pull Request.

## License
This extension is licensed under the MIT License. See the LICENSE file for more details.
