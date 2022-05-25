// first enter into web then into express using cd and then intall express using npm intsll express and also intall nodemon similarly. run npm init. then run "nodemon app.js" now we can use postman app post and get req

const express = require("express");
const path = require("path");
const app = express();
const port = 80;

// For serving static files
app.use('/static', express.static('static'))

// Set the template engine as pug
app.set('view engine', 'pug')

// Set the views directory
app.set('views', path.join(__dirname, 'views'))
 
// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});

app.get("/", (req, res)=>{ 
    res.status(200).send("This is homepage of my first express app with Harry");
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry");
});

app.post("/about", (req, res)=>{
    res.send("This is a post request about page of my first express app with Harry");
});
app.get("/this", (req, res)=>{
    res.status(404).send("This page is not found on my website cwh");
});

app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});
// To exit from nodemon while its running press CTR+C.
// To open the express folder in seperate window, just run "code ."----Remember that space between code and . is iportant.