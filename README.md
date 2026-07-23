# JSON Formatter Hub

🔗 Website: https://jsonformatterhub.com/

Lightweight, dependency-free JavaScript utilities for formatting, validating, minifying, and tabulating JSON — the same logic that powers [JSON Formatter Hub](https://jsonformatterhub.com/), a free, privacy-first JSON tool that runs entirely in the browser.

## Why this exists

Most online JSON formatters upload your data to a server before showing you anything. This repo shows the formatting logic openly and gives developers reusable functions they can drop into their own projects without depending on a third-party API or sending data anywhere.

## Features

- **Format / Beautify** — pretty-print with configurable indentation
- **Validate** — syntax checking with line/column error reporting
- **Minify** — strip whitespace for production payloads
- **Table view** — flatten a JSON array of objects into rows/columns

## Usage

```js
const { formatJSON, validateJSON, minifyJSON, jsonToTable } = require('./json-utils.js');

formatJSON('{"a":1,"b":2}', 2);
// '{\n  "a": 1,\n  "b": 2\n}'

validateJSON('{"a": }');
// { valid: false, message: '...', line: 1, column: 7 }

minifyJSON('{ "a": 1, "b": 2 }');
// '{"a":1,"b":2}'
```

## Try it live

The full tool — including tree view, table view, and JSON-to-XML/CSV/YAML conversion — is free at:

**https://jsonformatterhub.com/**

## Privacy

Every function here runs client-side. No JSON you process is ever transmitted, logged, or stored anywhere.

## License

MIT
