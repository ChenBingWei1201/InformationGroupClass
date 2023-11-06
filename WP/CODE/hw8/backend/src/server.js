import http from 'http';
import express from 'express';
import WebSocket from 'ws';
import wsConnect from './wsConnect.js';
import mongoose from 'mongoose';
import mongo from './mongo.js'

mongo.connect();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 4000;
server.listen(port, () =>
  console.log(`Example app listening on ws://localhost:${port}`),
);

const wss = new WebSocket.Server({ server });
const db = mongoose.connection;

db.once('open', () => {
  console.log("MongoDB connected!");
  wss.on("connection", (ws) => {
    ws.box = "";
    ws.onmessage = wsConnect.onMessage(wss, ws);
  });
});