const router = require('express').Router()
const teamCtrl = require('../controllers/team')

router.get("/",teamCtrl.team_index_get)
router.get("/new",teamCtrl.team_create_get)
router.post("/",teamCtrl.team_create_post)
router.get("/:teamId",teamCtrl.team_show_get)
router.get("/:teamId/edit",teamCtrl.team_edit_get)
router.put("/:teamId",teamCtrl.team_edit_put)
router.delete("/:teamId/delete",teamCtrl.team_del_delete)
module.exports=router;
