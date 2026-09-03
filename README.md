# JSForge LuisDev

JSForge is a local command-line JavaScript obfuscation tool for Windows and Linux. It does not require a server and processes files locally.

## Requirements

- Node.js 18+
- npm

## Install

```bash
npm install
npm link
```

On Linux, `npm link` may require appropriate permissions depending on the Node installation. On Windows, run the terminal with the permissions required by your Node/npm installation.

## Usage

```bash
jsforge app.js
jsforge app.js --level strong -o dist/app.js
jsforge src --output dist --recursive --level medium
jsforge app.js --level extreme --no-minify
jsforge server.js --node --level strong
```

Levels:

- `safe`: conservative transformations
- `basic`: light obfuscation
- `medium`: balanced default
- `strong`: aggressive
- `extreme`: maximum bundled protection; may affect compatibility/performance

### Important

JavaScript shipped to a browser can always be retrieved and ultimately analyzed because the runtime needs executable code. JSForge aims to increase the effort required for human inspection and reverse engineering; it cannot make source code mathematically unrecoverable or guarantee that an AI cannot analyze it.

For production builds, test the generated file thoroughly. Do not use `extreme` blindly on third-party libraries or code that relies on fragile reflection/dynamic evaluation.

## License

MIT
