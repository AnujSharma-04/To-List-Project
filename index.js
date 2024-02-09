const express = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:admin@cluster1.nqvqztn.mongodb.net?retryWrites=true&writeConcern=majority");

const app=express();
app.listen(7001,()=>{
    console.log("Damn...I'm Up");
});

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

//routes
app.use(require("./routes/index"));

module.exports = app;