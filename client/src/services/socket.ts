import { io } from "socket.io-client";

export const socket = io(`ws://${window.location.hostname}:${window.location.port}`);