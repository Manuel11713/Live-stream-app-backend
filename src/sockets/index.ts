import http from 'http';
import app from '../app';
const server = http.createServer(app);

const io = require('socket.io')(server);

const users = {}
const socketRoomMap = {}