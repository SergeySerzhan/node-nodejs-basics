import { readFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), './files/fileToRead.txt');

export const read = async () => {
    try {
        const data = await readFile(pathToFile, 'utf-8');
        console.log(data);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

read();