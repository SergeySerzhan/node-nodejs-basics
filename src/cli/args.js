export const parseArgs = () => {
    let str = '';
    const args = process.argv;

    for (let i = 2; i < args.length; i += 2) {
        str = `${str}, ${args[i].slice(2)} is ${args[i + 1]}`
    }

    console.log(str.slice(2));
};

parseArgs();