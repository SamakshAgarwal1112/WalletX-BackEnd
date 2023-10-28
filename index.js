const express = require('express');
const app = express();
app.use(express.json());
const dotenv = require('dotenv');
dotenv.config();
const pool = require('./Config');
const Auth = require('./Routes');
const connect = () => {
    try{
        app.listen(3000,() => {
            console.log('server is running on port 3000');
        })
    }catch(err){
        console.log(err);
    };
};
connect();
app.use(Auth);