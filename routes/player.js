const router = require("express").Router()
const playerCtrl = require("../controllers/player.js")

router.get('/', playerCtrl.player_index_get)

router.get('/new', playerCtrl.player_new_get)
router.post('/', playerCtrl.player_new_post)

router.get('/:playerId', playerCtrl.player_show_get)

router.delete('/:playerId', playerCtrl.player_delete_destroy)

//router.get
//router.put

module.exports = router
