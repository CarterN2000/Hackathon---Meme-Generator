const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config();
require('./config/database');

const memeRouter = require('./routes/memes')

const {PORT} = process.env;

const express = require("express");

const app = express();

app.get('/', (req, res)=> {
    res.send("Hello world");
});

app.use('/memes', memeRouter);

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(cors());
app.use(morgan("dev"));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
