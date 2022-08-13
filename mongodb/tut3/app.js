const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/University');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true        
    },
    age: {
        type: Number,
        min:18
    }
})

const teacher = mongoose.model("teacher", schema);

teacher.insertMany([
    {
    name: "Ali Raza",
    age: 26,
    },
    {
    name: "Abdul Rahman",
    age: 22
    }
])

// deleteing 
// teacher.deleteMany(function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data is deleted successfully")
//     }
// })

// updating 
// teacher.updateOne({age:28},{age:29}, function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data is updated successfully")
//     }
// })
// teacher.updateOne({},{name:"abdul Rahman",age:21}, function(err){
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("data is updated successfully")
//     }
// })



// teacherdb.save();
 