import { Transform } from 'stream';

const myTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().split('').reverse().join(''))
    }
})

export const transform = async () => {
    process.stdin.on('data', data => {
        myTransform.write(data);
    })
    myTransform.pipe(process.stdout);
};

transform();