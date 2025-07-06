const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const spotsRouter = require('./routes/spots');
const commentsRouter = require('./routes/comments');
const { connectDB } = require('./config/db');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/spots', spotsRouter);
app.use('/api/comments', commentsRouter);

connectDB();

app.listen(5000, () => console.log('Server running on port 5000'));
