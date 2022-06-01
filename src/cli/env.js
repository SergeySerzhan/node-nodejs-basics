export const parseEnv = () => {
    let str = '';
    const variables = process.env;

    for (let key in variables) {
        str = `${str}RSS_${key}=${variables[key]}; `;
    }

    console.log(str);
};

parseEnv();