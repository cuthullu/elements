var MongoClient = require("mongodb").MongoClient
var dbUri = process.env.DB_URI || 'mongodb://127.0.0.1/mongodb'
var mongo = require("mongodb")
var client

MongoClient.connect(dbUri, function(err, db) {
    console.log("Connecting to DB client on: ", dbUri)
    if (err) {
        console.log("Failed to connect to db on: ", dbUri, err)
        return
    }
    client = db
    console.log("DB client connected at: " + dbUri)
})

module.exports.collection = function(collection) {
    return client.collection(collection)
}
