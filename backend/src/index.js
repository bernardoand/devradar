const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const http = require('http');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

const URI =
  'mongodb+srv://omnistack:omnistack@cluster0-8aa3z.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
