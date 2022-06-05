import { rename as renameFs, realpath } from 'fs/promises';
import { dirname, resolve} from 'path';
import { fileURLToPath } from 'url';

const pathToFolder = resolve(dirname(fileURLToPath(import.meta.url)), './files');
const pathToFile = resolve(pathToFolder, './wrongFilename.txt');
const newPath = resolve(pathToFolder, './properFilename.md');

export const rename = async () => {
    try {
        const path = await realpath(newPath).catch(async () => {
            await renameFs(pathToFile, newPath);
        });
        if (path) throw new Error('File with this name already exist');
    } catch(e) {
        throw new Error('FS operation failed');
    }
};

rename();