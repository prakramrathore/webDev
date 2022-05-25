// Inserting Data in Mongodb
// use harrykart
db.items.insertOne({mane:"Samsung 30s",price:22000, rating:4.5, qty:223, sold:96})

db.items.insertMany([{mane:"Samsung 30s",price:22000, rating:4.5, qty:223, sold:96},{mane:"Moto 30s",price:42000, rating:3.5, qty:453, sold:696},{mane:"RealMe 30s",price:122000, rating:2.5, qty:623, sold:76}])

db.items.insertOne({mane:"RealMe 30s",price:122000, rating:2.5, qty:623, sold:76, IsRealme:"True"})


// Open Powershell and write mongod
// Open other Powershell and write mongo
// mongod is the "Mongo Daemon" it's basically the host process for the database. When you start mongod you're basically saying "start the MongoDB process and run it in the background". mongod has several default parameters, such as storing data in /data/db and running on port 27017.

// mongo is the command-line shell that connects to a specific instance of mongod. When you run mongo with no parameters it defaults to connecting to the localhost on port 27017. If you run mongo against an invalid machine:port combination then it will fail to connect (and tell you as much).

// use harrykart-----uses harrykart as current database
// db-----Show the running database
// show dbs-----Show all database
// db.items.insertOne({name:"sdf",,,,,etc.})-----"items" is collection and content in {} is called document,insertOne insert only one document in items collection
// db.items.insertMany([{},{},{},,,,,,etc.])-----insert many document in items collecion
// db.items.find()-----Show all documents in items collection
// Mondodb uses JS commands 
// you can write these commands in JS, copy it by CTR+C and than go to powershell and right click to copy it.