const express = require("express");
const app = express();
const connect = require("./config/database");
const port = 3001;

// const Tweet = require('./models/tweet');
const TweetRepository = require("./repository/tweet-repository");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, async () => {
  console.log(`server started at ${port} successfully`);
  await connect();
  console.log("connect with the database successfully");
  const tweetRepo = new TweetRepository();
  const tweet = await tweetRepo.get("652e36454ad277ebbd062171");

  console.log(tweet);

  /*//    const tweet = await Tweet.create({
//         content :'third Tweet',
       
//     })
// const tweet = await Tweet.find();
//     console.log(tweet);

 */
});
