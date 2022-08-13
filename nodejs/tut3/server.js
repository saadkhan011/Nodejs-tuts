const express = require("express");

// this is npm package this is used to get the value from indexed.html file like form etc 
const bodyParser = require('body-parser');

const app = express();
// we also write this with bodyParser package 
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', function(req, res){
    // __dirname will give the path of location where folder is present 
    res.sendFile(__dirname + "/index.html")
})
app.post('/', function(req, res){
    // this method will run when user will submit form 
    req.body.num1 = Number(req.body.num1)
    req.body.num2 = Number(req.body.num2)
    var sum = req.body.num1+req.body.num2;
    // and using res.send we will send the data to user 
    res.send("Sum of data is "+sum);
})
app.get('/bmiCalculator', function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html")
})
app.post('/bmiCalculator', function(req, res){
    var bmi = +req.body.weight / +req.body.height;
    console.log(req.body.weight)
    res.send("bmi is "+ bmi); 

})

app.listen(2000, function(){
    console.log("started successfully")
})