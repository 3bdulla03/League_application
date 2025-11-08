const router = require("express").Router()
const authCont = require("../controllers/auth")

router.get("/", authCont.users_get)
router.get("/sign-up", authCont.users_signUp_get)
router.post("/sign-up", authCont.users_signUp_post)

//
module.exports = router
