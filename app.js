const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req,res) =>{
    res.render('home.ejs');
})

app.get("/bmi", (req,res) =>{
    res.render('bmi.ejs');
})

app.get("/sugar-checker", (req,res) =>{
    res.render('sugar.ejs');
})

app.get("/foods", (req,res) =>{
    res.render('foods.ejs');
})

app.get("/medicines", (req,res) =>{
    res.render('medicine.ejs');
})

app.get("/meditation", (req,res) =>{
    res.render('meditation.ejs');
})

app.listen(3000, ()=>{
    console.log("App started at port 3000")
})