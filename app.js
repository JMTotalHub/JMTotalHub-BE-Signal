import express from 'express';
import http from 'http';
import path from 'path';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 7000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
