const router = require("express").Router()

const leagueCont = require("../controllers/league")
const teamCtrl = require("../controllers/team")

router.get("/", leagueCont.league_index_get)

router.get("/new", leagueCont.league_create_get)

router.post("/", leagueCont.league_create_post)

router.get("/:leagueId", leagueCont.league_show_get)

router.get("/:leagueId/edit", leagueCont.league_edit_get)

router.put("/:leagueId", leagueCont.league_update_put)

router.delete("/:leagueId", leagueCont.league_delete_delete)

//team routes
router.get("/:leagueId",teamCtrl.team_index_get)
router.get("/:leagueId/team/new",teamCtrl.team_create_get)
router.post("/",teamCtrl.team_create_post)
router.get("/:teamId",teamCtrl.team_show_get)
router.get("/:teamId/edit",teamCtrl.team_edit_get)
router.put("/:teamId",teamCtrl.team_edit_put)
router.delete("/:teamId/delete",teamCtrl.team_del_delete)
module.exports=router;

module.exports = router
