const Team = require('../models/team.js')
const Player = require('../models/player.js')
const League = require('../models/league.js')


// //index
// exports.player_index_get = async(req,res)=>{
//   //view should send team Id throw url using url-parameter
//   //const players = await Player.find({team: req.params.teamId})//players array to show in the view table
//   const players = await Player.find().populate('team')
//   res.render('player/index.ejs', {players})
// }


//create
exports.player_new_get = async(req,res)=>{
  //view should send team Id throw url using url-parameter
  const league = await League.findById(req.params.leagueId)
  const team = await Team.findById(req.params.teamId) //searching for the team in database
  res.render('player/new.ejs', {league, team}) //load create view
}

exports.player_new_post = async(req,res)=>{
  //create player functionality
  const team = await Team.findById(req.params.teamId)
  req.body.team = req.params.teamId //adding the team id to the player object
  const newPlayer = await Player.create(req.body)
  team.players.push(newPlayer._id)
  newPlayer.save()
  team.save()
  res.redirect(`/leagues/${req.params.leagueId}/teams/${req.params.teamId}`)//redirect to players/index
}

//show one
exports.player_show_get = async(req,res)=>{
  const league = await League.findById(req.params.leagueId)
  const team = await Team.findById(req.params.teamId)
  const player = await Player.findById(req.params.playerId).populate('team')
  res.render('player/show.ejs', {player , league, team})
}

//delete
exports.player_delete_destroy = async (req,res)=>{
  const player = await Player.findByIdAndDelete(req.params.playerId)
  res.redirect(`/leagues/${req.params.leagueId}/teams/${req.params.teamId}`)
}

//edit
exports.player_show_edit = async (req,res)=>{
  const league = await League.findById(req.params.leagueId)
  const team = await Team.findById(req.params.teamId)
  const player = await Player.findById(req.params.playerId)
  res.render('player/edit.ejs', {player,league, team})
}
exports.player_update_put = async (req,res)=>{
  const league = await League.findById(req.params.leagueId)
  const team = await Team.findById(req.params.teamId)
  const player =await Player.findByIdAndUpdate(req.params.playerId, req.body)
  res.redirect(`/leagues/${req.params.leagueId}/teams/${req.params.teamId}/players/${req.params.playerId}`)
}
