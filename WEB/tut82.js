// Searching/Querying data from the Mongo Database
use harrykart

// This query will return all the documents with rating 3.5
// rating:3.5 inside is called Filter objects
db.items.find({rating:3.5}) 

// This query will return all the documents with rating greater or eqall to 3.5
// gte-----Greater than equal
db.items.find({rating: {$gte:3.5}}) 

// This query will return all the documents with rating greater 3.5
// gt-----Greater than
db.items.find({rating: {$gt:3.5}}) 

// AND operator
db.items.find({rating: {$gt:3.5}, price: {$gte: 4000}})

// More exmples
db.items.find({rating: {$lt:3.5}, price: {$gte: 114000}})

// OR operator
db.items.find({ $or:[{rating: {$lte:3.5}}, {price: {$gte: 114000}}, {IsRealme: True}]})

db.items.insertOne({mane:"Samsung 10s",price:22000, rating:1, qty:223, sold:96})


// in find after filters is we write {rating:1, mane: 1} than it will show only ratings and mane of the selected documents after filters
db.items.find({rating:3.5}, {rating:1,mane: 1})
// { "_id" : ObjectId("61129408c64586d2d62dcd87"), "mane" : "Moto 30s", "rating" : 3.5 }
db.items.find({rating:1},{mane: 1, qty: 1})
// { "_id" : ObjectId("61129f7cd0f03bd967e40e66"), "mane" : "Samsung 10s", "qty" : 223 }
db.items.find({rating:1}, {rating:1,mane: 1})
// { "_id" : ObjectId("61129f7cd0f03bd967e40e66"), "mane" : "Samsung 10s", "rating" : 1 }