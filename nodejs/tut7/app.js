const express = require("express");
const bodyparser = require("body-parser");
// this is template called embeded java script 
// this is used for layout, using js in html file and sending data from js file to html file 
const ejs = require("ejs");


const app = express();
app.use(bodyparser.urlencoded([{ extended: true }]));
// by doing this we set the view directory as a template 
app.set( 'view engine', 'ejs');

// this is the method to find day and date 
const date = new Date();
// this will get the current date 
let currentDate = date.getDate();
// this will get the current day 
let currentday = date.getDay();
let day = "";

app.get("/", function (req, res) {
    // challenge 1
    // if (currentday === '6' || currentday === '0' ) {
    //     day = "weekend";
    // }
    // else{
    //     day = "working day";
    // }
    // challenge 2
    switch(currentday){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
    }
    // we are sending data to html file 
    // in template we will not use res.send we will use res.render 
    res.render("index", {kindOfDay: day});
})



app.listen(3000, function () {
    console.log("server started suuccessfully");
})

