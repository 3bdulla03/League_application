const router = require("express").Router()
const profileCont = require("../controllers/profileCont")

const multer = require("multer")
const upload = multer({ dest: "public/upload/" })
//

router.get("/", profileCont.profile_get)
router.get("/edit", profileCont.profile_edit_get)
router.put("/edit", upload.single("avatar"), profileCont.profile_edit_put)

//
module.exports = router
