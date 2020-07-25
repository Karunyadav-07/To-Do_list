// jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.urlencoded({extended : true}));

var items =["hi","helo","buy"];   // way of decleration of empty array in javascript ,similar for filled array

app.set("view engine","ejs");
app.use(express.static("public"));
app.get("/",function(req,res){
  var options = {
     weekday: 'long',
     year: 'numeric',
     month: 'long',
     day: 'numeric'
   };
var today  = new Date(); // inbuit javascript function
var getToday =   today.toLocaleDateString("en-US", options);  // inbuilt function
res.render("list",{ ddate:getToday , newListItem:items}); // ddate represents variable name off day and date in .ejs file
});

app.post("/",function(req,res ){
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
});

app.listen(3000,function(){
  console.log("secrver is running on port 3000");
});
