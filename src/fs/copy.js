import { cp } from 'fs/promises';
import { dirname, resolve} from 'path';
import { fileURLToPath } from 'url';

const pathToFolder = dirname(fileURLToPath(import.meta.url));
const pathToSrcFolder = resolve(pathToFolder, './files/')
const pathToDestFolder = resolve(pathToFolder, './files_copy/');

export const copy = async () => {
    try {
        await cp(pathToSrcFolder, pathToDestFolder, {errorOnExist: true, force: false, recursive: true});
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

copy();