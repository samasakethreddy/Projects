const express = require('express');
const app = express();

app.use(express.static(__dirname +'/public'));
app.get('/',(req,res)=>{
    console.log('hello');
    res.sendFile(__dirname +'/index.html');
})
app.listen(3000,()=>{
    console.log("server started");
})

