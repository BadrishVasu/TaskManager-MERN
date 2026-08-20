import { io } from "https://cdn.socket.io/4.8.3/socket.io.esm.min.js";

const backendUrl = process.env.NODE_ENV === 'production' ? undefined : 'http://localhost:4444';
export const socket = io(backendUrl);