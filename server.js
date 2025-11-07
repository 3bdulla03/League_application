// DEPENDENCIES //
const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()

const ejs = require("ejs")

// DATABASE //
const mongoose = require("./config/database")

//REQUIRE MIDDLEWARE //
const methodOverride = require("method-override")
const morgan = require("morgan")

// USE MIDDLEWARE //
app.use(express.urlencoded())
app.use(methodOverride("_method"))
app.use(morgan("dev"))

// SESSION CONFIG //

// ROOT ROUTES //
app.get("/", (req, res) => {
  res.render("mainPage.ejs")
})
// REQUIRE ROUTES //
const router = require("./routes/auth")

// USE ROUTES //
app.use("/auth", router)

// LISTEN SERVER //
app.listen(3000, () => {
  console.log("listening on port 3000")
})
