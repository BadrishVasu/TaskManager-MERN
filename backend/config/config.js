export const port = 4444;
export const mongoDbUrl = "mongodb://127.0.0.1:27017/taskDb";
export const corsOptions = {
    // origin should have frontend's port number
    origin: 'http://localhost:4443',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type']
}
