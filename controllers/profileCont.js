const User = require("../models/user")
const bcrypt = require("bcrypt")
//

exports.profile_get = async (req, res) => {
  res.render("auth/profile.ejs")
}

exports.profile_edit_get = async (req, res) => {
  res.render("auth/edit.ejs")
}
