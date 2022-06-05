import { createReadStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), './files/fileToRead.txt');

export const read = async () => {
    createReadStream(pathToFile, {encoding: 'utf-8'}).pipe(process.stdout);
};

read();