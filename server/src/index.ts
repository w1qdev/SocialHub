import dotenv from 'dotenv';
import express from 'express';
import { router } from './routes/index';
import { connectToDatabase } from './db/database';
import { logSuccess, logInfo } from './helpers/logger';
import cors from 'cors';
import corsConfig from './config/cors.config';

const app = express();
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// setting up the configuration
app.use(express.json());
app.use(cors(corsConfig));
dotenv.config();

// routes
app.use('/api/user', router.userRoute);

// starting up the server
app.listen(SERVER_PORT, () => {
    connectToDatabase();
    logSuccess('[*] Server has been started...');
    logInfo(`[*] http://localhost:${SERVER_PORT}`);
});
