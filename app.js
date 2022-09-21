const express = require("express");
let ejs = require('ejs'); 
const bodyParser = require('body-parser');
const https = require("node:https");
const { monitorEventLoopDelay } = require("node:perf_hooks");
const app = express();

app.set('view engine', 'ejs');//for setup the ejs engine


   


app.get('/', (req, res) => {


    var today = new Date("September 8, 2000 23:15:30");
var day = today.getDay();
var result
//console.log(day);//ceck out if this works without the function or not.
//if statements 
{
if(day===1)
{
    result="monday";
}
if(day===2)
{
    result="tuesday";
}
if(day===3)
{
    result="wednesday";
}
if(day===4)
{
    result="thursday";
}
if(day===5)
{
    result="friday";
}
if(day===6)
{
    result="saturday";
}
if(day===7)
{
    result="sunday";
}

} 
    res.render('index', {html_day: result});//it will render the page name index
  });
  


//app.get("/",(req,res)=>{

    //for checking day of certain date
// var today = new Date("March 15, 1965 23:15:30");
// var day = today.getDay();
// console.log(day);

   


//});


    app.listen(process.env.PORT || 3000,()=>{

        console.log("server is running")
        
        })