const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      // required: true,
      // max: [250, "tweets cannot exceed 250 characters"],
    },
    likes: {
      type: Number,
    },
    noOfTweets: {
      type: Number,
    },
    comment: {
      type: String,
    },
    // hashtags: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "HashTag",
    //   },
    //},
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);
module.exports = Tweet;
