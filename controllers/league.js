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
    res.redirect("/leagues")
}

exports.league_show_get = async (req, res) => {
    const league = await League.findById(req.params.leagueId).populate('teams')
    console.log(league)
    res.render("league/show.ejs", {league})
}

exports.league_edit_get = async (req, res) => {
    const league = await League.findById(req.params.leagueId).populate('manager')
    res.render("league/edit.ejs", {league})
}

exports.league_update_put = async (req, res) => {
    const league = await League.findById(req.params.leagueId).populate("manager")
        if (league.manager.equals(req.session.user._id)) {
            await League.findByIdAndUpdate(req.params.leagueId, req.body);
            res.redirect('/leagues');
        }
        else {
            res.send("You don't have permission to do that.");
        }
}

exports.league_delete_delete = async (req, res) => {
    const league = await League.findByIdAndDelete(req.params.leagueId)
    res.redirect("/leagues")
}
