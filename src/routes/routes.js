const express = require("express")

const home = require("./home")
const auth = require("./auth")

function Routes(app){
    app.use(auth);
    app.use(home);
}

module.exports = Routes;