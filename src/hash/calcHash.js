import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import {fileURLToPath} from 'url';
import { resolve, dirname } from 'path';

const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), './files/fileToCalculateHashFor.txt');

export const calculateHash = async () => {
    const hash = createHash('sha256');
    const data = await readFile(pathToFile, 'utf-8');

    hash.update(data);
    console.log(hash.digest('hex'));
};

calculateHash();