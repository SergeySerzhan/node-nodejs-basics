import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
    const numberOfWorkers = cpus().length;
    const workers = [];
    const workersStatus = [];
    const result = [];

    for (let i = 0; i < numberOfWorkers; i += 1) {
        workers.push(new Worker('./worker.js', {workerData: 10 + i}));
        workersStatus.push(false);
    }

    workers.forEach((worker, i) => {
        worker.on('message', res => {
            workersStatus[i] = true;

            if (res) {
                result[i] = {status: 'resolved', value: res};
            } else result[i]= {status: 'error', value: null};

            if (workersStatus.every(val => val)) console.log(result);
        });
        worker.on('error', err => {
            workersStatus[i] = true;

            result[i] = {status: 'error', value: null};

            if (workersStatus.every(val => val)) console.log(result);
        })
    } )
};

performCalculations();