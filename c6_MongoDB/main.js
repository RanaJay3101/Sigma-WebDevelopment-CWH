import mongoose from 'mongoose';
import express from 'express';

const app = express();
const port = 3000;


await mongoose.connect('mongodb://localhost:27017/');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});