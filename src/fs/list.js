import { readdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import {fileURLToPath} from 'url';

const pathToFolder = resolve(dirname(fileURLToPath(import.meta.url)), './files');

export const list = async () => {
    try {
        const filenames = await readdir(pathToFolder);
        console.log(filenames);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

list();