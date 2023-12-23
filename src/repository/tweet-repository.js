const Tweet = require("../models/tweet");

class TweetRepository {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }
  async getTweet(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log("Not found");
    }
  }
  async getAllTweets() {
    try {
      const response = await Tweet.find({});
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  async destroyTweet(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return "true";
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = TweetRepository;

//! CRUD operations - > Create Read Update Delete // we do not need  update
