import mongoose from 'mongoose'
import { logSuccess, logError } from '../helpers/logger';

export const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/socialhub')
        .then((res) => {
            logSuccess('[*] Successfully connected to the database');
        })
    } catch (error) {
        logError(`Error connecting to the database: ${error}`);
    }
};