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

