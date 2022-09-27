const express = require("express");
let ejs = require('ejs'); 
const bodyParser = require('body-parser');
const https = require("node:https");
const { monitorEventLoopDelay } = require("node:perf_hooks");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
var items = [];

app.set('view engine', 'ejs');//for setup the ejs engine


   


app.get('/', (req, res) => {

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var today  = new Date();
    var result=today.toLocaleDateString("en-US",options); 
console.log(today.toLocaleDateString("en-US",options));





res.render("index", {html_day: result,html_items: items});
  });
  
  app.post("/",function(req,res){

var item = req.body.newItem;
items.push(item);
res.redirect("/");

  })



    app.listen(process.env.PORT || 3000,()=>{

        console.log("server is running")
        
        })