const express = require("express")
const {registerUser, authUser, allUsers, chatpersons, welcomePage} = require("../controllers/userControllers")
const router = express.Router();
const {protect} = require("../middleware/authMiddleware")



router.route("/register").post(registerUser).get(protect,allUsers)
router.post("/login", authUser).get(welcomePage)
router.route("/chatbox").get(chatpersons)
module.exports = router;