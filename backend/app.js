import express from 'express';
import cors from 'cors';
import { port, mongoDbUrl, corsOptions } from './config/config.js';
import { taskController } from './controller/taskController.js';
import { testController } from './controller/testController.js';
import mongoose from 'mongoose';

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", testController);
app.use("/api/tasks", taskController);

mongoose
    .connect(mongoDbUrl)
    .then(() => {
        console.log(`App connected to database: ${mongoDbUrl}`);
        app.listen(
            port,
            () => {
                console.log(`App is listening to port: ${port}`);
            }
        );
    })
    .catch((err) => {
        console.log(err);
    });
