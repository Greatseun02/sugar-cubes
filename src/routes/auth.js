require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser")
const bcrypt = require('bcrypt');
const saltRounds = Number(process.env.SALTROUNDS)
const uri = process.env.URI


const {Admin} = require('../db/schemas')

const router = express.Router();
// mongoose.connect(process.env.MONGODBURL)



// mongoose.connect("mongodb+srv://goodnewsadewole9:KlxnHrSZaAqSrpF9@cluster0.34ohk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

router.get("/admin-login", (req, res)=>{
    res.render("admin-login")
} )

router.get("/login", (req, res)=>{
    res.render("login")
} )


router.get("/create-admin", (req, res)=>{
    res.render("create-admin")
} )

router.post("/create-admin", bodyParser.urlencoded({extended:false}), (req, res)=>{
    const username = req.body.username;
    const password = req.body.password;

  
    bcrypt.genSalt(saltRounds, function (err, salt){
        if (err){
            console.log("Bcrypt Gen Salt - " + err)
        }
        else{
            bcrypt.hash(password, salt, async function(err, hash){
                if (err){
                    console.log("Bcrypt Hash - " + err)
                }else{
                    await mongoose.connect(process.env.URI)
                    try{
                        const admin = new Admin({
                            username:username,
                            password:hash
                        })
                        await admin.save();
                        try{
                            res.redirect("/admin-login")
                        }catch(e){
                            console.log(e)
                        }
                    }catch(e){
                        console.log(e)
                    }

                    mongoose.connection.close()
                }
            })
        }
    })
})


router.post("/admin-login", bodyParser.urlencoded({ extended: false }), async (req, res)=>{
    const {username, password} = req.body
    
    await mongoose.connect(process.env.URI)
    try{
        const data = await Admin.findOne({username:username})
        try{
            if (data){
                bcrypt.compare(password, data.password, function(err, result){
                    console.log(result)
                    if(err){
                        console.log("Bcrypt Compare" + err)
                    }else if(result==false){
                        res.send("username does not exist")
                    }else{
                        res.redirect("/")
                    }
                })
            }else{
                res.send("password is wrong")
            }
        }catch(err){
            console.log(err)
        }
    }catch(err){
        console.log("Mongoose Connection Error - " + err)
    }
    mongoose.connection.close()
})

module.exports = router;
