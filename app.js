const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const errCtrl = require(`./controller/errorCtrl`);

const userRouter = require('./Routes/user.router');

const app = express();
dotenv.config({path : './config.env'})

app.use(express.json());;
//Routes

app.use('/api/user',userRouter);

app.use(errCtrl);

mongoose.connect(process.env.MONGODB_LOCAL).then(() => console.log('DB connected..')).catch(err => console.log(err));

app.listen(process.env.PORT,() => {
	console.log('App running ...');
}); 
