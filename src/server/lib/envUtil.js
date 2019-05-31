
const getEnvironment = () => {
    return process.env.NODE_ENV;
};

const envIsProduction = () => {
    return getEnvironment() === 'production';
};

const envIsDevelopment = () => {
    return getEnvironment() === 'development';
};

const envPort = () => {
    return process.env.port;
};


export {
    getEnvironment,
    envIsProduction,
    envIsDevelopment,
    envPort
}
