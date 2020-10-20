const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server is running on PORT ${PORT}`.blue.bold));
