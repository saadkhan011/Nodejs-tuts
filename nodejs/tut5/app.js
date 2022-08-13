const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const { application, response } = require("express");
const { json } = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res) {
    const url = "https://www.omdbapi.com/?i=tt0120338&apikey=c933217d"
    https.get(url, function (response) {
        response.on("data", function (data) {
            console.log(JSON.parse(data));
            // console.log(movieData)
            res.sendFile(__dirname + "/index.html");
        })
    })
})

app.listen(3000, function () {
    console.log("server is started");
})