const express = require('express');
const app = express()
const path = require('path')

app.set("view engine","ejs");
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,"public")))

require('dotenv').config();
 
//db connection
const userModel = require("./models/user")
const userDetailModel = Require("./models/userDetail")
const  connectionmodel = require("./models")

