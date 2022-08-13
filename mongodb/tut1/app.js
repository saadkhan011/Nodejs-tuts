const mongoose = require("mongoose");
// setting db name and url 
mongoose.connect('mongodb://localhost:27017/Fruitshop');

// setting schema for table or collection 
const fruitSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    review: String
});

// setting name and schema for Collection
const fruit = mongoose.model("Fruit", fruitSchema);

// adding data in collection 
const fruitData = new fruit({
    name: "chiku",
    rating: "3",
    review: "This is okay"
})

// const fruitData = new fruit({
//     name: "Mango",
//     rating: "3",
//     review: "This is okay"
// })
// const apple = new fruit({
//     name: "Apple",
//     rating:  4,
//     review: "best"
// })
fruit.insertMany([fruitData, apple], function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("connection successfull");
    }
});


const personSchema = new mongoose.Schema({
    name: String,
    age: Number
})

const person = mongoose.model("Person", personSchema);

const personData = new person({
    name : "Saad",
    age: 21
})
// person.insertMany([
//     {
//         name: "Jawad",
//         age:20
//     },
//     {
//         name: "Ahmad",
//         age:20
//     }

// ])

fruitData.save();
personData.save();
// db name Fruitshop
// fruitSchema is schema
// fruit is Collection name 









