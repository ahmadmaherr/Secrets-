//jshint esversion:6
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost:27017/accountsDB");

app.listen("3000", function(){
  console.log("app is running");
})

app.get("/", function(req, res){
  res.render("home");
})

app.get("/register", function(req, res){
  res.render("register");
})

app.get("/login", function(req, res){
  res.render("login");
})
