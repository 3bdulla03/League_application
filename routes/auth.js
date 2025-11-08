const router = require("express").Router()
const authCont = require("../controllers/auth")

router.get("/", authCont.auth_get)
router.get("/sign-up", authCont.auth_signUp_get)
router.post("/sign-up", authCont.auth_signUp_post)
router.get("/sign-in", authCont.auth_signIn_get)
router.post("/sign-in", authCont.auth_signIn_post)
router.get("/sign-out",authCont.auth_signOut_get)

//
module.exports = router
