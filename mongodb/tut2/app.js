const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/University');

const dbschema = new mongoose.Schema({
    name: String,
    age: Number,
    class: Number
})

const student = mongoose.model("Student", dbschema);

// const studentData = new student({
//     name: "Saad",
//     age: 21,
//     class: 14
// })

// student.insertMany([
//     {
//         name: "Talha",
//         age:20,
//         class:12
//     }, 
//     {
//         name: "Moeez",
//         age:19,
//         class:13
//     }
// ], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("entered Successfully");
//     }
// })



// studentData.save();
student.find({class: 13},function(err, data){
    if(err){
        console.log(err)
    }
    else{
        mongoose.connection.close()
        // console.log(data)
        data.forEach(value => {
            console.log(value.name)
        });
    }
})
student.find(function(err, data){
    if(err){
        console.log(err)
    }
    else{
        mongoose.connection.close()
        // console.log(data)
        data.forEach(value => {
            console.log(value.name)
        });
    }
})
