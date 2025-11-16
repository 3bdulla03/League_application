const Team = require("../models/team")
const League = require("../models/league")
const { league_create_get } = require("./league")

// //getting the team-index.ejs
// exports.team_index_get= async ( req , res )=>{
//   const team = await Team.find().populate("user")
//   res.render("league/show.ejs",{team})
// }

//getting the team-new.ejs
exports.team_create_get= async ( req , res )=>{
  const league = await League.findById(req.params.leagueId)
  res.render('team/new.ejs', {league})
}

//create a new team
exports.team_create_post= async ( req , res )=>{
  req.body.owner=req.session.user._id
  await Team.create(req.body)
  res.redirect(`/leagues/${req.params.leagueId}`)
}


//getting the team-show.ejs
exports.team_show_get= async ( req , res )=>{
  const team = await Team.findById(req.params.teamId).populate("user")
  res.render("team/show.ejs", {team})
}

//getting the team-edit.ejs
exports.team_edit_get= async ( req , res )=>{
  const team = await Team.findById( req.params.teamId , req.body ).populate("user")
  res.render("team/edit.ejs", {team})
}

//updating the page
exports.team_edit_put= async ( req , res )=>{
  await Team.findByIdAndUpdate( req.params.teamId , req.body ).populate("user")
  res.redirect(`leagues/${req.params.leagueId}/teams/${req.params.teamId}`)
}

//deleting a Team
exports.team_del_delete= async ( req , res )=>{
  await Team.findByIdAndDelete(req.params.teamId).populate("user")
  res.redirect(`leagues/${req.params.leagueId}`)
}
