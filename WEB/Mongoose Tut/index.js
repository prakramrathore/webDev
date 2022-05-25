const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harrykart', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
//   console.log("We are connected...")
// });

const kittySchema = new mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  const greeting = "My name is " + this.name;
  console.log(greeting);
}

const Kitten = mongoose.model('harrykitty2', kittySchema);

const harryKitty = new Kitten({ name: 'harryKitty' });
const harryKitty2 = new Kitten({ name: 'harryKitty2' });
// console.log(harryKitty.name); 
// harryKitty.speak();

harryKitty.save(function (err, harryKitty) {
  if (err) return console.error(err);
  // harryKitty.speak();
});

harryKitty2.save(function (err, k) {
  if (err) return console.error(err);
  // k.speak();
});


Kitten.find({name:"harryKitty"},function (err, kittens) {
  if (err) return console.error(err);
  console.log(kittens);
})



// To run this, write node ind, press tab ------> node .\index.js