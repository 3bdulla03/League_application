const router = require("express").Router()

const leagueCont = require("../controllers/league")
const teamCtrl = require("../controllers/team")
const playerCtrl = require("../controllers/player.js")

router.get("/", leagueCont.league_index_get)

router.get("/new", leagueCont.league_create_get)
router.post("/", leagueCont.league_create_post)

router.get("/:leagueId", leagueCont.league_show_get) //team index

router.delete("/:leagueId", leagueCont.league_delete_delete)

router.get("/:leagueId/edit", leagueCont.league_edit_get)
router.put("/:leagueId", leagueCont.league_update_put)

//team routes
router.get("/:leagueId/teams/new", teamCtrl.team_create_get)
router.post("/:leagueId/teams", teamCtrl.team_create_post)

router.get("/:leagueId/teams/:teamId", teamCtrl.team_show_get) //player index

router.delete("/:leagueId/teams/:teamId", teamCtrl.team_del_delete)

router.get("/:leagueId/teams/:teamId/edit", teamCtrl.team_edit_get)
router.put("/:leagueId/teams/:teamId", teamCtrl.team_edit_put)

//player
router.get("/:leagueId/teams/:teamId/players/new", playerCtrl.player_new_get)
router.post("/:leagueId/teams/:teamId/players", playerCtrl.player_new_post)

router.get(
  "/:leagueId/teams/:teamId/players/:playerId",
  playerCtrl.player_show_get
)

router.delete(
  "/:leagueId/teams/:teamId/players/:playerId",
  playerCtrl.player_delete_destroy
)

router.get(
  "/:leagueId/teams/:teamId/players/:playerId/edit",
  playerCtrl.player_show_edit
)

router.put(
  "/:leagueId/teams/:teamId/players/:playerId",
  playerCtrl.player_update_put
)

// trade player

router.put(
  "/:leagueId/teams/:teamId/players/:playerId/trade",
  playerCtrl.trade_player_put
)

module.exports = router
