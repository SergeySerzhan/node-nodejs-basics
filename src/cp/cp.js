import { fork } from 'child_process';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const pathToFile = resolve(dirname(fileURLToPath(import.meta.url)), './files/script.js');

export const spawnChildProcess = async (args) => {
    fork(pathToFile, args);
};

spawnChildProcess(process.argv.slice(2));
