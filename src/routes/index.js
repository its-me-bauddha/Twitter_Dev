const express = require("express");
const { createTweet, getsTweet } = require("../controllers/tweet-controller");
const { signUpUser, signInUser } = require("../controllers/user-controller");
const router = express.Router();

router.post("/tweet", createTweet);
router.get("/tweet/:id", getsTweet);
router.post("/signup", signUpUser);
router.post("/signin", signInUser);

module.exports = router;
