const express = require("express")
const {registerUser, authUser, allUsers, chatpersons} = require("../controllers/userControllers")
const router = express.Router();

router.route("/register").post(registerUser).get(allUsers)
router.post("/login", authUser)
router.route("/chatbox").get(chatpersons)
module.exports = router;