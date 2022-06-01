import { rm } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), './files/fileToRemove.txt');

export const remove = async () => {
    try {
        await rm(pathToFile);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

remove();