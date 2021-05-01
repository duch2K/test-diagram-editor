const express = require('express');
const cors = require('cors');

require('dotenv').config();
const sequelize = require('./db');
const models = require('./models');
const router = require('./routes');

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {console.log(`Server has started on port ${PORT}`)})
  } catch (err) {
    console.log(err);
  }
};

start();