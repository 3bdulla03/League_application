const League = require("../models/league")

exports.league_index_get = async (req, res) => {
    const league = await League.find().populate('manager')
    res.render("league/index.ejs", {league})
}

exports.league_create_get = async (req, res) => {
    // const league = await League.find().populate('user')
    res.render("league/new.ejs")
} 

exports.league_create_post = async (req, res) => {
    req.body.manager = req.session.user._id
    await League.create(req.body)
    res.redirect("/league")
}