const express = require('express');
const path = require('path');

const port = "3000"
const app = express();

//middle ware funtions
//set up server to locate static applications and EJS pages
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../Client/views'));//show express the views directory
app.use('/images', express.static(path.join(__dirname, '../Client/images')));
app.use('/Partials',express.static(path.join(__dirname, '../Client/Partials')));

//routs
app.get('/',(req,res)=>{
    //hello world page
    res.render("index")
})
//sup
app.listen(port, ()=>{//server listens on port 3000
    console.log("website hosted on port " + port)
    console.log("go to localhost:3000 in your Browser")
})