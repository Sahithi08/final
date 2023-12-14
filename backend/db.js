const mongoose = require("mongoose");

// var mongoDBURL = 'mongodb+srv://vishnutha03:1234@cluster0.bzighwq.mongodb.net'

mongoose.connect("mongodb://mongodb_db:27016/mydatabase" , {useUnifiedTopology: true , useNewUrlParser: true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose