const router = require("express").Router()
const authCont = require("../controllers/auth")

router.get("/", authCont.auth_get)
router.get("/sign-up", authCont.auth_signUp_get)
router.post("/sign-up", authCont.auth_signUp_post)
router.get("/sign-in", authCont.auth_signIn_get)
router.post("/sign-in", authCont.auth_signIn_post)
router.get("/sign-out", authCont.auth_signOut_get)
router.get("/profile", authCont.auth_profile_get)
router.get("/edit", authCont.auth_profile_edit_get)
router.put("/edit", authCont.auth_profile_edit_put)

//
module.exports = router
