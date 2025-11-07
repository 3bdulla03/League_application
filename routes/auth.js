const router = require("express").Router()
const authCont = require("../controllers/auth")

router.get("/", authCont.users_get)

module.exports = router
