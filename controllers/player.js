const Team = require('../models/team.js')
const Player = require('../models/player.js')


//index
exports.player_index_get = async(req,res)=>{
  //view should send team Id throw url using url-parameter
  const players = await Player.find({team: req.params.teamId})//players array to show in the view table
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
  const newPlayer = req.body
  newPlayer.team = req.params.teamId
  const create = await Player.create(newPlayer)
  await create.save()
  const players = await Player.find({team: req.params.teamId})//players array to show in the view table
  res.redirect('player/index.ejs', {players})//redirect to players/index
}


// exports.player_show_get = async(req,res)=>{
//   const player = await Player.findById(req.params.playerId)
//   res.render('player/index.ejs')
// }

