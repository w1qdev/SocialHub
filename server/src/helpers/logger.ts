export const logSuccess = (...logs: string[]): void => {
    console.log('\x1b[32m', logs.join(' '), '\x1b[0m');
};

export const logError = (...logs: string[]): void => {
    console.log('\x1b[31m', logs.join(' '), '\x1b[0m');
};

export const logInfo = (...logs: string[]): void => {
    console.log('\x1b[34m', logs.join(' '), '\x1b[0m');
};
