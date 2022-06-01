import path from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.js';
import {fileURLToPath} from 'url';

const random = Math.random();
const filename = fileURLToPath(import.meta.url);
let unknownObject;

if (random > 0.5) {
    await import('./files/a.json', { assert: {type: 'json'}}).then(module => unknownObject = module.default);
} else {
    await import('./files/b.json', { assert: {type: 'json'}}).then(module => unknownObject = module.default);
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${path.dirname(filename)}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};



