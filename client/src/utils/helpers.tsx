import { v4 as uuidv4 } from 'uuid';

export const getCurrentTime = (): string => {
    const date = new Date();

    const hours: number = date.getHours();
    let minutes: string | number = date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    const result = `${hours}:${minutes}`;
    return result;
};

export const generateUniqueId = (): string => {
    const uniqueId = uuidv4();

    return uniqueId;
};
