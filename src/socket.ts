import { io } from 'socket.io-client';

// For development, use the WebContainer URL
const SOCKET_URL = 'https://realtime-button-server.onrender.com/';

export const socket = io(SOCKET_URL, {
  transports: ['websocket', 'polling'],
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  reconnectionAttempts: 5
});