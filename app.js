const dotenv = require('dotenv')
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'})

require('./db/conn');
// const User = require('./model/userSchema');

app.use(express.json())

const PORT = process.env.PORT || 3005

app.use(require('./router/auth'))


// MiddleWare
const middleware = (req,res,next)=>{
    console.log(`hello my middleware`)
    next();
}


app.get('/',(req,res)=>{
    res.send('Hello world from home')
});
app.get('/about',middleware,(req,res)=>{
    res.send('Hello world from about')
});
app.get('/contact',(req,res)=>{
    res.send('Hello world from contact')
});
app.get('/signup',(req,res)=>{
    res.send('Hello world from signup')
});
app.get('/signin',(req,res)=>{
    res.send('Hello world from signin')
});

if(process.env.NODE_ENV=="production"){
    app.use(express.static("client/build"));
}

app.listen(PORT, ()=>{
    console.log(`server is running at port no ${PORT}`)
})