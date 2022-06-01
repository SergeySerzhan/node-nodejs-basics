export const parseEnv = () => {
    let str = '';
    const variables = process.env;

    for (let key in variables) {
        if (key.includes('RSS_')) {
            str = `${str}${key}=${variables[key]}; `;
        }
    }

    console.log(str);
};

parseEnv();