const TweetService = require("../services/tweet-service");

const tweetService = new TweetService();

createTweet = async (req, res) => {
  try {
    const data = req.body;
    const response = await tweetService.create(data);

    return response.status(201).json({
      success: true,
      message: "successfully create the tweet !!!",
      data: response,
      error: {},
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Error !! while creating the tweet",
      data: {},
      error: error.message,
    });
  }
};

getTweet = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await tweetService.getTweet(id);
    return response.status(201).json({
      success: true,
      message: "successfully get the tweet !!!",
      data: response,
      error: {},
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "Error !! while fetching the tweet",
      data: {},
      error: error.message,
    });
  }
};

module.exports = {
  createTweet,
  getTweet,
};
