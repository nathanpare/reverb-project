const express = require('express');

const app = express();

const port = 8080;

const cors = require('cors');

const pool = require('./connection');

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  console.log(`Music library server nunning on ${port}`);
});