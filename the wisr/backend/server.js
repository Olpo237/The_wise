const express = require('express');
const app = express();
const {Sequelize} = require('sequelize');
const path = require('path');
const cors = require('cors');

require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extends: false}));

app.listen(4005, () => {
    console.log('server is running on port 4005');
})