const express = require('express');
const axios = require('axios');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const AuthData = require('./routes/Auth')

const app = express();
app.use(cookieParser());
app.use(cors(
    {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
        credentials: true,
    })
)


app.use('/auth', AuthData);

app.listen(process.env.PORT, () => console.log(`Server running on ${process.env.PORT}`));
