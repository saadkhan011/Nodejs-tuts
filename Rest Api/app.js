const express = require("express");
const mongoose = require("mongoose")
const bodyParser= require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect("mongodb://localhost:27017/RestApi");

const dbSchema = new mongoose.Schema({
    title: String,
    post: String    
})

const collection = mongoose.model("collection", dbSchema);

// collection.insertMany([
//     {
//         title: "Jack Bauer",
//         post: "if jack bauer had been in the movie spartan,it would have been called 1"
//     },
//     {
//         title: "Saad",
//         post: "Once someone tried to tell jack bauer a knock knock joke.jack found out who was there,who they worked for,and where the fucking bomb was"
//     },
//     {
//         title: "Ahmad",
//         post: "When jack bauer ran out of ammo,he caught 3 bullets in his chest and used them to reload."
//     }
// ])



app.get("/article", function(req, res){
    collection.find({}, function(err, data){
        if(err){
            res.send(err)
        }
        else{
            res.send(data);
        }
    })
})
app.post("/article", function(req, res){
    console.log(req.body.title)
    const Collection = new collection({
        title: req.body.title,
        post: req.body.post
    })
    Collection.save(function(err){
        if(!err){
            res.send("Success")
        }
        else{
            res.send(err)
        }
    })
})
app.delete("/article", function(req, res){
    collection.deleteMany(function(err){
        if(!err){
            res.send("Successfully deleted")
        }
        else{
            res.send(err)
        }
    })
})

// deleting finding and updating with specific article
app.route("/article/:title")
.get(function(req, res){
    collection.findOne({title:req.params.title}, function(err, data){
        if(err){
            res.send(err)
        }
        else{
            res.send(data);
        }
    })
})

.delete(function(req, res){
    collection.deleteOne({title:req.params.title}, function(err){
        if(err){
            res.send(err)
        }
        else{
            res.send("success");
        }
    })
})
.put(function(req, res){
    collection.findOneAndUpdate(
        {title: req.params.title},
        {title: req.body.title, page: req.body.page},
        {overwrite: true},
        function(err){
            if(err){
                res.send(err)
            }
            else{
                res.send("success");
            }
        }
    )
})
.patch(function(req, res){
    collection.findOneAndUpdate(
        {title: req.params.title},
        {$set:req.body},
        function(err){
            if(err){
                res.send(err)
            }
            else{
                res.send("success");
            }
        }
    )
});





app.listen(3000, function(){
    console.log("server started")
})