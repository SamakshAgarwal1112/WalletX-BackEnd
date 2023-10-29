const express = require('express');
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend origin
    credentials: true,
  };
const app = express();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
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
const { spawn } = require('child_process');

// Running api.js file
const apiProcess = spawn('node', ['api.js'], { stdio: 'inherit' });

apiProcess.on('close', (code) => {
  console.log(`API process exited with code ${code}`);
});
app.use(Auth);