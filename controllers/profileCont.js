const User = require("../models/user")
const bcrypt = require("bcrypt")
//

exports.profile_get = async (req, res) => {
  const newUser = await User.findById(req.session.user._id)

  res.render("auth/profile.ejs", { user: newUser })
}

exports.profile_edit_get = async (req, res) => {
  res.render("auth/edit.ejs")
}
exports.profile_edit_put = async (req, res, next) => {
  const userNameConfirm = await User.findOne({ username: req.body.username })
  if (userNameConfirm) {
    res.send("Username already taken. Pls choose Other username.")
    return
  }

  if (req.body.password !== req.body.confirmPassword) {
    res.send("Password and Confirm Password does not match !!!")
    return
  }

  const hashPassword = bcrypt.hashSync(req.body.password, 5)
  req.body.password = hashPassword
  req.body.avatar = req.file.filename
  newUser = await User.findByIdAndUpdate(req.session.user._id, req.body)
  next()

  res.redirect("/profile")
}
