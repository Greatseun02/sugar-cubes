const mongoose = require("mongoose")

const {Schema} = mongoose;

const adminSchema = new Schema({
    username: String,
    password:String,
})

const userSchema = new Schema({
    username:String,
    password:String,
})

const sugarCubeSchema = new Schema({
    body:String,
})

const User = mongoose.model("User", userSchema)
const Admin = mongoose.model("Admin", adminSchema)

module.exports = {User, Admin}