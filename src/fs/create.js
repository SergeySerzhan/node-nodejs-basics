import { writeFile } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), './files/fresh.txt');

export const create = async () => {
    try {
        await writeFile(pathToFile, 'I am fresh and young', {encoding: 'utf-8', flag: 'ax+'});
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

create();