import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Server } from 'socket.io';
import { createServer } from 'http';

import { port, mongoDbUrl, corsOptions } from './config.js';
import { taskController } from './controller/taskController.js';

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: corsOptions });

app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/tasks", taskController);

const startServer = async () => {
    try {
        await mongoose.connect(mongoDbUrl);
        await console.log(`App connected to database: ${mongoDbUrl}`);
        await io.on('connection', (socket) => console.log("A user connected"));
        await server.listen(port, () => console.log(`Server is running at port: ${port}`));
    }
    catch (error) {
        console.log(error);
    }
}

startServer();