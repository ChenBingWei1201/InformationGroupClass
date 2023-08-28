import http from 'http';
import express from 'express';
// import cors from 'cors';
import WebSocket from 'ws';
import wsConnect from './wsConnect';
import mongoose from 'mongoose';
import mongo from './mongo.js'

mongo.connect();

const app = express();
// app.use(cors());
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const db = mongoose.connection;

db.once('open', () => {
  console.log("MongoDB connected!");
  wss.on('connection', (ws) => {
    // if (wss._readyState === 1)
    // wsConnect.initData(ws); // it does not work!
    ws.onmessage = wsConnect.onMessage(ws);
  });
});

const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`Example app listening on https://localhost:${port}`),
);


