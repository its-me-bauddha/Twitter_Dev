const express = require("express");
const { createTweet, getsTweet } = require("../controllers/tweet-controller");
const router = express.Router();

router.post("/tweet", createTweet);
router.get("/tweet/:id", getsTweet);

module.exports = router;
