const router = require('express').Router()
const postCtrl = require("../controllers/postControllers")
const imageExport = require('../db/cloudinary')

router.get("/new", postCtrl.newRoute) 
// router.get("/new", imageExport.single("images"), postCtrl.newRoute);
router.get("/", postCtrl.index)
router.get("/:id", postCtrl.showOnePost)
router.get("/:id/edit", postCtrl.editRoute)
// router.get("/:id/edit", imageExport.single("images"), postCtrl.editRoute)

router.post("/", postCtrl.createNewPost)
// router.post("/", imageExport.single("images"), postCtrl.createNewPost)

router.put("/:id", postCtrl.updatePost)
// router.put("/:id", imageExport.single("images"), postCtrl.updatePost)

router.delete("/:id", postCtrl.deletePost)

module.exports = router