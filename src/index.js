const express = require("express");
const app = express();
const connect = require("./config/database");
const port = 3001;
const tweet = require("./models/tweet");
const Hashtag = require("./models/hashtags");
const TweetRepository = require("./repository/tweet-repository");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, async () => {
  console.log(`server started at ${port} successfully`);
  await connect();
  console.log("connect with the database successfully");

  // tweet.create({
  //   content: "this is my third tweet",
  //   likes: 24,
  //   noOfTweets: 18,
  //   comment: "This is my third comment on first tweet of the document",
  // });

  // Hashtag.create({
  //   text: "Shopping",
  //   tweets: ["658667cbd408394328d0ee12"],
  // });

  const tweetRepo = new TweetRepository();
  //let tweets = await tweetRepo.getAll();
  //let tweets = await tweetRepo.getTweet("6586679a421f09a64c8807bb");
  let tweets = await tweetRepo.destroyTweet("6586679b2430b9f90dcdc0ec");
  console.log(tweets);
});
