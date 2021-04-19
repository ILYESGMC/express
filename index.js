const express = require('express');
const app = express();
const port = 8080;
// const router = express.Router()
// app.use(express.static('doc'));
// const path = require('path')
var date = new Date();
var day = date.getDay();
var hours = date.getHours();
var minutes = date.getMinutes();

app.set('view engine', 'pug');
app.set('views','./views');


const open_day = (req,res,next) => {
    if(day<4 || day>5){
        res.send('This web application is only available in working time (Monday to Friday,  from 9 to 17)')}
        else next();
}
const open_hour = (req,res,next) => {
    if((hours<9 || hours>10) || (hours===17 && minutes!==0)){
    res.send('This web application is only available in working time (Monday to Friday,  from 9 to 17)')  
    } 
    else next();
}

// app.get("/contact",open_day,open_hour,(req,res)=>{
//     res.sendFile(path.join(__dirname, 'doc', 'contact.html'))
// })
app.get("/contact",open_day,open_hour, function(req, res){
    res.render('contact');
});

// app.get("/services",open_day,open_hour,(req,res)=>{
//     res.sendFile(path.join(__dirname, 'doc', 'services.html'))
// })
app.get("/services",open_day,open_hour, function(req, res){
    res.render('services');
});

// app.get("/",open_day,open_hour,(req,res)=>{
//     res.sendFile(path.join(__dirname, 'doc', 'index.html'))
// })
app.get("/",open_day,open_hour, function(req, res){
    res.render('index');
 });

app.listen(port, (err)=>{err ? console.log('err') : console.log("it work")})
