const express = require("express");
const { createTweet, getsTweet } = require("../controllers/tweet-controller");
const { signUpUser, signInUser } = require("../controllers/user-controller");
const { toggleLike } = require("../controllers/like-controller");
const router = express.Router();

router.post("/tweet", createTweet);
router.get("/tweet/:id", getsTweet);
router.post("/signup", signUpUser);
router.post("/signin", signInUser);
router.post("/like", toggleLike);

module.exports = router;
