'use strict';
const assert = require('assert');
const { obfuscateCode } = require('../src/obfuscator');
const source = `function add(a,b){ const message = "hello"; return a+b+message.length; }`;
const out = obfuscateCode(source, { level: 'safe' });
assert.ok(out.length > 0);
assert.notStrictEqual(out, source);
console.log('Smoke test passed.');
