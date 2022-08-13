const express = require("express");
const bodyparser = require("body-parser");
const ejs = require("ejs");
// we can also make our module we will require that like this 
const date = require(__dirname + "/date.js");

const item = ["Food", "Eat", "Drink"];
const workitem = [];

const app = express();
app.use(bodyparser.urlencoded([{ extended: true }]));
app.set( 'view engine', 'ejs');
// for css folder we make public folder and add that folder here 
app.use(express.static('public'))


let today = date.getDate();
console.log(date.getDate());
console.log(date.getDay());
app.get("/", function (req, res) {
    res.render("index", {weekDay:today, listItem:item})
})

app.post("/", function(req, res){
    // if(req.body.btn === "work"){ 
    //     workitem.push(req.body.input); 
    //     res.redirect("/work");
    // }
    // else{
        item.push(req.body.input); 
        res.redirect("/");
    // }
    console.log(req.body.btn);
})

// app.get("/work", function(req, res){
//     res.render("work")
// })

app.get("/about", function(req, res){
    res.render("about")
})


app.listen(3000, function () {
    console.log("server started suuccessfully");
})

