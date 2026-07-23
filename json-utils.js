/**
 * json-utils.js
 * Lightweight, dependency-free JSON formatting utilities.
 * Companion library for https://jsonformatterhub.com
 */

/** Pretty-print JSON with a given indent size. Throws on invalid JSON. */
function formatJSON(input, indent = 2) {
  const parsed = JSON.parse(input);
  return JSON.stringify(parsed, null, indent);
}

/** Remove all non-essential whitespace from JSON. Throws on invalid JSON. */
function minifyJSON(input) {
  const parsed = JSON.parse(input);
  return JSON.stringify(parsed);
}

/**
 * Validate JSON and return structured error info instead of throwing.
 * Returns { valid: true } or { valid: false, message, line, column }.
 */
function validateJSON(input) {
  try {
    JSON.parse(input);
    return { valid: true };
  } catch (err) {
    const match = /position (\d+)/.exec(err.message);
    let line = null;
    let column = null;
    if (match) {
      const pos = parseInt(match[1], 10);
      const lines = input.slice(0, pos).split('\n');
      line = lines.length;
      column = lines[lines.length - 1].length + 1;
    }
    return { valid: false, message: err.message, line, column };
  }
}

/**
 * Flatten a JSON array of objects into rows/columns for a table view.
 * Non-array input is wrapped in a single-element array.
 */
function jsonToTable(input) {
  const parsed = typeof input === 'string' ? JSON.parse(input) : input;
  const rows = Array.isArray(parsed) ? parsed : [parsed];
  const columns = [...new Set(rows.flatMap((row) => Object.keys(row || {})))];
  return {
    columns,
    rows: rows.map((row) => columns.map((col) => (row ? row[col] : undefined))),
  };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { formatJSON, minifyJSON, validateJSON, jsonToTable };
}