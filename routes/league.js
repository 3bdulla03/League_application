const router = require("express").Router()

const leagueCont = require("../controllers/league")

router.get("/", leagueCont.league_index_get)

router.get("/new", leagueCont.league_create_get)

router.post("/", leagueCont.league_create_post)

router.get("/:leagueId", leagueCont.league_show_get)

router.delete("/:leagueId", leagueCont.league_delete_delete)

module.exports = router
