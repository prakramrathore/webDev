// const exp = require('constants');
const express = require('express');
const path = require('path');
const app = express();
// const bodyparser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contactdance', { useNewUrlParser: true, useUnifiedTopology: true });
const port = 8000;

// Define mongoose schema
const Contactschema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String
});
const Contact = mongoose.model('Cnt', Contactschema);


//Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded())

//PUG specifi stuff
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory


//ENDPOINTS
app.get('/', (req, res) => {
    const params = {};
    res.status(200).render('home.pug', params);
})
app.get('/about', (req, res) => {
    const params = {};
    res.status(200).render('about.pug', params);
})
app.get('/services', (req, res) => {
    const params = {};
    res.status(200).render('services.pug', params);
})
app.get('/classinfo', (req, res) => {
    const params = {};
    res.status(200).render('classinfo.pug', params);
})

app.get('/contact', (req, res) => {
    const params = {};
    res.status(200).render('contact.pug', params);
})
app.post('/contact', (req, res) => {
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.render('contact.pug');
    }).catch(()=>{
        res.status(400).send("Item not saved to the database")
    })
})

//Start the server
app.listen(port, () => {
    console.log(`The application is started successfully in port ${port}`)
})