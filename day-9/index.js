const express = require('express');
const path=require('path');
const app=express();

app.set("views",path.join(_dirname,"view"));
app.set("view engine","jade");


// console.log(__dirname);

app.use('/',(req,res)=>{
//   res.sendFile(path.join(__dirname,"day-9.1/hello.txt"),'test.txt');
// res.sendFile(path.join(__dirname,"day-9.1/image.jpg"));
// res.download(path.join(__dirname,"day-9.1/image.jpg"))
// res.render('index',{title:"express"})
res.status(201)
.cookie("token","test",{
    expire: new Date(Date.now() + 8 * 3600000)
})
.cookie("hello","hello")
.redirect(301,"/admin")
})

app.listen(5000);