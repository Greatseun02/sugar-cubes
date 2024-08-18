const express = require("express");
const Routes = require("./routes/routes");
const path = require('path');

const passport = require("passport");
const LocalStategy = require("passport-local").Strategy;
const session = require("express-session")



const app = express();
app.set("view engine", "ejs");

let normalizedPath = __dirname.replace(/\\/g, '/')
app.set("views", normalizedPath + "/views")

// Set the static directory to serve files
// app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));

// app.use(
//     session(
//         {
//             secret:"no-diddy",
//             resave:false,
//             saveUninitialized:false
//         }
//     )
// )

// app.use(passport.initialize());
// app.use(passport.session());


Routes(app)



app.listen(process.env.PORT || "3000", ()=>{
    console.log("working")
})