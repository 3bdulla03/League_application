const User = require("../models/user")
const bcrypt = require("bcrypt")

exports.auth_get = async (req, res) => {
  res.render("auth/index.ejs")
}

exports.auth_signUp_get = async (req, res) => {
  res.render("auth/signUp.ejs")
}

exports.auth_signUp_post = async (req, res) => {
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

exports.auth_signIn_get = async (req, res) => {
  res.render("auth/signIn.ejs")
}

exports.auth_signIn_post = async (req, res) => {
  const user = await User.findOne({ username: req.body.username })
  if (!user) {
    return res.send("Invalid Username or Password , Try Again !!!")
  }
  const verifyPassword = bcrypt.compareSync(req.body.password, user.password)
  if (!verifyPassword) {
    return res.send("Invalid Username or Password , Try Again !!!")
  }

  req.session.user = {
    username: user.username,
    _id: user._id,
  }
  res.render("auth/index.ejs") // It should render to next page(maybe leagues page)
}

exports.auth_signOut_get = async (req, res) => {
  req.session.destroy()
  res.redirect("/")
}
