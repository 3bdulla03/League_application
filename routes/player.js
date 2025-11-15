const router = require("express").Router()
const playerCtrl = require("../controllers/player.js")

router.get('/', playerCtrl.player_index_get)
router.get('/new', playerCtrl.player_new_get)


module.exports = router
