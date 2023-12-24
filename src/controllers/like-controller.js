const LikeService = require("../services/like-service");

const likeService = new LikeService();

toggleLike = async (req, res) => {
  try {
    const data = req.body;
    const response = await likeService.toggleLikes(
      data.modelId,
      data.modelType,
      data.userId
    );

    return res.status(201).json({
      success: true,
      message: "successfully like the tweet !!!",
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error !! while liking the tweet",
      data: {},
      error: error.message,
    });
  }
};

module.exports = {
  toggleLike,
};
