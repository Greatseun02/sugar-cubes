const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser")

require('dotenv').config();

const {Admin} = require('../db/schemas')

const router = express.Router();
// mongoose.connect(process.env.MONGODBURL)


router.get("/admin/login", (req, res)=>{
    res.render("admin-login")
} )

router.get("/login", (req, res)=>{
    res.render("login")
} )

router.post("/admin/login", bodyParser.urlencoded({ extended: false }), async (req, res)=>{
    const {username, password} = req.body
    console.log(username, password)

    await Admin.findOne({username:'theafarainitiative'})
    res.redirect("/login")
})

module.exports = router;
