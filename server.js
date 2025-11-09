// DEPENDENCIES //
const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()

const ejs = require("ejs")
const session = require("express-session")

// DATABASE //
const mongoose = require("./config/database")

//REQUIRE MIDDLEWARE //
const methodOverride = require("method-override")
const morgan = require("morgan")
const passUserToView = require("./middlewares/passUserToView")
const isSignedIn = require("./middlewares/isSignedIn")

// USE MIDDLEWARE //
app.use(express.urlencoded())
app.use(methodOverride("_method"))
app.use(morgan("dev"))

// SESSION CONFIG //
app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
  })
)

app.use(passUserToView)

// ROOT ROUTES //
app.get("/", (req, res) => {
  res.render("mainPage.ejs")
})
// REQUIRE ROUTES //
const router = require("./routes/auth")
const leagueRouter = require('./routes/league.js')

// USE ROUTES //
app.use("/auth", router)

app.use("/league",isSignedIn, leagueRouter)

// LISTEN SERVER //
app.listen(3000, () => {
  console.log("listening on port 3000")
})
