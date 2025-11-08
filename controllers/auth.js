const User = require("../models/user")
const bcrypt = require("bcrypt")

exports.users_get = async (req, res) => {
  res.render("auth/index.ejs")
}

exports.users_signUp_get = async (req, res) => {
  res.render("auth/signUp.ejs")
}

exports.users_signUp_post = async (req, res) => {
  const userNameConfirm = await User.findOne({ username: req.body.username })
  if (userNameConfirm) {
    res.send("Username already taken. Pls choose Other username.")
  }

  if (req.body.password !== req.body.confirmPassword) {
    res.send("Password and Confirm Password does not match !!!")
  }

  const hashPassword = bcrypt.hashSync(req.body.password, 5)
  req.body.password = hashPassword

  newUser = await User.create(req.body)

  res.render("auth/index.ejs")
}
