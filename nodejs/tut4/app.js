const express = require("express");
// https is internal module of node
// this is used for url like api url  
const https = require('https');
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");    
})

app.post('/', function(req, res){
    const city = req.body.input;
    // this is api url 
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&&q="+city+"&&appid=eb6df7518647ec0c63d15e7c1b538c42#";
    // we use https get request to access the api data 
    https.get(url, function (response) {
        response.on("data", function (data) {
            // this convert json format into js format 
            const weatherData = JSON.parse(data);
            console.log(weatherData);
            // this convert js format into json format 
            // const weatherData = JSON.stringify(data);
            const img = weatherData.weather[0].icon;
            const icon = "https://openweathermap.org/img/w/"+img+".png";
            const temp = weatherData.main.temp;
            const disc = weatherData.weather[0].description;
            console.log(temp);
            res.write("<p>Weather is "+disc+" </p>");
            res.write("<h1>The temp is " + temp + " in "+city + " </h1>");
            res.write("<img src ="+icon+"></img>");
            res.send()
        })
    })
})

app.listen(2000, function () {
    console.log("server is started on port");
})