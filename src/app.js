const express = require("express");
const Routes = require("./routes/routes");

const passport = require("passport");
const LocalStategy = require("passport-local").Strategy;
const session = require("express-session")



const app = express();
app.set("view engine", "ejs");
app.set("views", "./src/views/layouts")

app.use(express.static("public"))

app.use(
    session(
        {
            secret:"no-diddy",
            resave:false,
            saveUninitialized:false
        }
    )
)

app.use(passport.initialize());
app.use(passport.session());


Routes(app)



app.listen("3000", ()=>{
    console.log("working...")
})