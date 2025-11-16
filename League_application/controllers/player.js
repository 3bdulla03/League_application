const Team = require('../models/team.js')
const Player = require('../models/player.js')


//index
exports.player_index_get = async(req,res)=>{
  //view should send team Id throw url using url-parameter
  //const players = await Player.find({team: req.params.teamId})//players array to show in the view table
  const players = await Player.find().populate('team')
  res.render('player/index.ejs', {players})
}


//create
exports.player_new_get = async(req,res)=>{
  //view should send team Id throw url using url-parameter
  const team = await Team.findById(req.params.teamId) //searching for the team in database
  res.render('player/new.ejs', {team}) //load create view
}

exports.player_new_post = async(req,res)=>{
  //create player functionality
  req.body.team = req.params.teamId //adding the team id to the player object
  const create = await Player.create(req.body)
  await create.save()
  res.redirect('/players')//redirect to players/index
}

//show one
exports.player_show_get = async(req,res)=>{
  const player = await Player.findById(req.params.playerId).populate('team')
  res.render('player/show.ejs', {player})
}

//delete
exports.player_delete_destroy = async (req,res)=>{
  const player = await Player.findByIdAndDelete(req.params.playerId)
  res.redirect('/players')
}

//edit
exports.player_show_edit = async (req,res)=>{
  const player = await Player.findById(req.params.playerId)
  res.render('player/edit.ejs', {player})
}
exports.player_update_put = async (req,res)=>{
  const player =await Player.findByIdAndUpdate(req.params.playerId, req.body)
  res.redirect(`/players/${req.params.playerId}`)
}
