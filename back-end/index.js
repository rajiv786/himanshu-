require('dotenv').config()
const express=require('express');
const app=express();

const port= 5000;
const database=require('./db')
database();
const sign=require('./api')
const Otp=require('./api')
const Login=require('./api')
const bodyParser = require('body-parser');
const cors=require('cors')
app.use(cors({}))
app.use(express.json());                                                                                                          
app.use(bodyParser.json())


// Endpoint for handling the Google login callback

app.use('/sign',sign)
app.use('/Otp',Otp)
app.use('/Login',Login)
app.listen(port,function(){
    console.log(`server listening on port ${port}`)
});