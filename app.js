const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.json());
// middleware that will run on all request
// adds property banana to request object
// This property will be avaible at app.get('/')
app.use((req,res,next)=>{
    req.banana = 'banana';
    next();
});
// middleware that will be executed when
// any type of request is made to /example
app.use('/example',(req,res,next)=>{
    console.log('Example middleware being executed');
    next();
});
// prints out banana property that was added
// in our middleware.
app.get('/',(req,res)=>{
    console.log(req.banana);
    res.send('MiddleWare');
});

app.listen(3000);