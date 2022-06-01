import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const pathToDir = dirname(fileURLToPath(import.meta.url));
const pathToFile = resolve(pathToDir, './files/fileToCompress.txt');
const pathToArchive = resolve(pathToDir, './files/archive.gz');

export const decompress = async () => {
    const source = createReadStream(pathToArchive);
    const unzip = createGunzip();
    const dest = createWriteStream(pathToFile);

    pipeline(source, unzip, dest, (e) => {
        if (e) console.error('Error occurred');
    })
};

decompress();