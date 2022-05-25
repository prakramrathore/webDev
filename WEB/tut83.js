
// deleting data from the Mongo Database
show dbs
use harrykart
show collections

dbs.items.find({price:22000})


// Deleting items from Mongo Database
dbs.items.deleteOne({price:22000})   //This delete first document with price 22000 if multi document match
dbs.items.deleteMany({price:22000})   //This delete all document with price 22000 if multi document match


