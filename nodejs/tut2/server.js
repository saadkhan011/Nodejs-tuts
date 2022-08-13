// npm package 
const express = require("express");
// with express you need to write this 
const app = express();

// in this way when user will make a get request of you web this function will run
// means when user will search on google this wil run 
app.get('/', function(req, res){
    res.send("<h1>Hello world</h1>");
})

// when user will make a request for contact this will run
app.get('/contact', function(req, res){
    res.send("<h1>You can contact with me through here</h1>");
})
app.get('/about', function(req, res){
    res.send("<h1>Hello world</h1>");
})

app.listen(3000, function(){
    console.log("started successfully");
})