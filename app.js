const express = require("express");
let ejs = require('ejs'); 
const bodyParser = require('body-parser');
const https = require("node:https");
const app = express();

app.use('view engine', 'ejs');//for setup the ejs engine


var today = new Date("March 15, 1965 23:15:30");
var day = today.getDay();
//console.log(day);//ceck out if this works without the function or not.

   


app.get('/', (req, res) => {
    res.render('index', {html_day: 'day'});//it will render the page name index
  });
  


app.get("/",(req,res)=>{

    //for checking day of certain date
// var today = new Date("March 15, 1965 23:15:30");
// var day = today.getDay();
// console.log(day);

   


});


    app.listen(process.env.PORT || 3000,()=>{

        console.log("server is running")
        
        })