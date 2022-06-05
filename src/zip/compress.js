import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const pathToDir = dirname(fileURLToPath(import.meta.url));
const pathToFile = resolve(pathToDir, './files/fileToCompress.txt');
const pathToDestFile = resolve(pathToDir, './files/archive.gz');

export const compress = async () => {
    const source = createReadStream(pathToFile);
    const zip = createGzip();
    const dest = createWriteStream(pathToDestFile);

    pipeline(source, zip, dest, (e) => {
        if (e) console.error('Error occurred');
    })
};

compress();