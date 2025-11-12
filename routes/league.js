const router = require("express").Router()

const leagueCont = require("../controllers/league")

router.get("/", leagueCont.league_index_get)

router.get("/new", leagueCont.league_create_get)

router.post("/", leagueCont.league_create_post)

module.exports = router
