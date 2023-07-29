const express = require("express")
const {registerUser, authUser} = require("../controllers/userControllers")
const router = express.Router();

router.route("/register").post(registerUser)
router.post("/login", authUser)
router.route("/searchUser").get(searching)
module.exports = router;