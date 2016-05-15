var Promise = require("promise")
var mongo = require("mongodb")
var db = require("../db")

module.exports.get = function() {
    return new Promise(function(resolve, reject) {
        db.collection("hellos").find().toArray(function(err, hellos) {
            if (err) {
                reject({
                    code: 500,
                    msg: err
                })
            } else {
                resolve(hellos)
            }
        })
    })
}

module.exports.find = function(id) {
    return new Promise(function(resolve, reject) {
        db.collection("hellos").findOne({
            _id: mongo.ObjectID(id)
        }, function(err, hello) {
            if (err) {
                reject({
                    code: 500,
                    msg: err
                })
            } else if (hello === undefined) {
                reject({
                    code: 404,
                    msg: "Hello not found with id: " + id
                })
            } else {
                resolve(hello)
            }
        })
    })
}

module.exports.add = function(hello) {
    return new Promise(function(resolve, reject) {
        db.collection("hellos").insertOne(hello, function(err, thing) {
            if (err) {
                reject({
                    code: 500,
                    msg: err
                })
            } else {
                resolve(thing.insertedId)
            }
        })
    })
}

module.exports.delete = function(id) {
    return new Promise(function(resolve, reject) {
        db.collection("hellos").remove({
            _id: mongo.ObjectID(id)
        }, function(err, hello) {
            if (err) {
                reject({
                    code: 500,
                    msg: err
                })
            } else {
                resolve()
            }
        })
    })
}
