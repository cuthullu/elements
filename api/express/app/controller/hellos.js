var express = require('express'),
    router = express.Router(),
    hellos = require('../domain/hellos')

router.route("/")
    .get(function(req, res) {
        console.log("Recieved GET for hellos");
        hellos.get()
            .then(function(resp) {
                res.json(resp)
            })
            .catch(function(err) {
                res.set("responseText", err.msg);
                res.sendStatus(err.code);
            })

    })
    .post(function(req, res) {
        console.log("Recieved POST for hellos");
        var hello = req.body
        hellos.add(hello)
            .then(function(id) {
                res.location('/hellos/' + id)
                res.sendStatus(201)
            })

    })

router.route("/:id")
    .get(function(req, res) {
        var id = req.params.id;
        console.log("Recieved GET for hellos:", id);
        hellos.find(id)
            .then(function(resp) {
                res.json(resp)
            })
            .catch(function(err) {
                res.set("responseText", err.msg);
                res.sendStatus(err.code);
            })

    })
    .delete(function(req, res) {
        var id = req.params.id;
        console.log("Recieved DELETE for hellos:", id);
        hellos.delete(id)
            .then(function(resp) {
                res.sendStatus(200)
            })
            .catch(function(err) {
                res.set("responseText", err.msg);
                res.sendStatus(err.code);
            })
    })
module.exports = router
