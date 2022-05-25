const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = '80';
//Express specific stuff
app.use('/static', express.static('static'));
app.use(express.urlencoded())

//PUG specifi stuff
app.set('view engine', 'pug'); //Set the template engine as pug
app.set('views', path.join(__dirname, 'views')); //Set the views directory


//ENDPOINTS
app.get('/', (req,res)=>{
    const con = 'This is best content so far to use wisely';
    const parameter = {'title' : 'PubG', 'content' : con};
    res.status(200).render('index.pug', parameter);
})

app.post('/', (req, res)=>{
    Name = req.body.name;//We will fetch data using name not id
    age = req.body.age;
    gender = req.body.name;
    address = req.body.address;
    more = req.body.more;
    let outputTowrite = `Name of the client is ${Name}, ${age} years old, ${gender}, residing at ${address}. More about His/Her: ${more}.`
    fs.writeFileSync('output.txt', outputTowrite);
    const parameter = {'message':'Your form has been successfully submitted'}
    res.status(200).render('index.pug', parameter)
})

//Start the server
app.listen(port, ()=>{
    console.log(`The application is started successfully in port ${port}`)
})

