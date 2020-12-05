const path = require('path');
const express = require('express')
const app = express()

module.exports = function(app) {

    app.use(express.static(path.join(__dirname, 'public/dist')));

    app.use(function(req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'))
    })
}