// Updating data from the Mongo Database

show dbs
use harrykart
show collections

// if we want to create a newdbs
// use newdbs
// show dbs will not show newdbs becuse first we need to add something into it


// In updateOne we need to pass two objects, first is filter and second one is $set which will set some value
db.items.updateOne({mane:"Moto 30s"}, {$set: {price: 40000}})
db.items.updateMany({name:"RealMe"},{$set: {price:100000}})