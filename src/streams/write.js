import { createWriteStream } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), './files/fileToWrite.txt');

export const write = async () => {
    const writeStr = createWriteStream(pathToFile, {encoding: 'utf-8'});
    process.stdin.on('data', data => {
        writeStr.write(data);
    })
};

write();