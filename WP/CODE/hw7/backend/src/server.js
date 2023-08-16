import http from 'http';
import express from 'express';
import dotenv from "dotenv-defaults";
import cors from 'cors';
import WebSocket from 'ws';
import mongoose from 'mongoose';
import mongo from './mongo'

mongo.connect();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });
const db = mongoose.connection;

db.once('open', () => {
  console.log("MongoDB connected!");
  wss.on('connection', (ws) => {
    // Define WebSocket connection logic
  });
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Example app listening on https://localhost:${port}`),
);