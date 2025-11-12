const Team = require("../models/team")

//getting the team-index.ejs
exports.team_index_get= async ( req , res )=>{
  const team = await Team.find().populate("user")
  res.render("Team/team-index.ejs",{team})
}

//getting the team-new.ejs
exports.team_create_get= async ( req , res )=>{
  res.render("Team/team-new.ejs")
}

//create a new team
exports.team_create_post= async ( req , res )=>{
  req.body.owner=req.session.user._id
  await Team.create(req.body)
  res.redirect("/Team")
}


//getting the team-show.ejs
exports.team_show_get= async ( req , res )=>{
  const team = await Team.findById(req.params.teamId).populate("user")
  res.render("Team/team-show.ejs", {team})
}

//getting the team-edit.ejs
exports.team_edit_get= async ( req , res )=>{
  const team = await Team.findById( req.params.teamId , req.body ).populate("user")
  res.render("Team/team-edit.ejs", {team})
}

//updating the page
exports.team_edit_put= async ( req , res )=>{
  await Team.findByIdAndUpdate( req.params.teamId , req.body ).populate("user")
  res.redirect(`Team/${req.params.teamId}`)
}

//deleting a Team
exports.team_del_delete= async ( req , res )=>{
  await Team.findByIdAndDelete(req.params.teamId).populate("user")
  res.redirect("/Team")
}
