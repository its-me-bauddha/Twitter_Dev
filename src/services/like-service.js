const LikeRepository = require("../repository/like-repository");
const TweetRepository = require("../repository/tweet-repository");

class LikeService {
  constructor() {
    this.likeRepository = new LikeRepository();
    this.tweetRepository = new TweetRepository();
  }
  async toggleLikes(modelId, modelType, userId) {
    let likeable;

    if (modelType === "Tweet") {
      likeable = await this.tweetRepository.get(modelId);
    } else if (modelType === "Comment") {
      // likable = await this.
    } else {
      console.log("wrong model type");
    }
    const exists = await this.likeRepository.findByUserAndLikeable({
      user: userId,
      onModel: modelType,
      likeable: modelId,
    });

    console.log(exists);
    let isAdded;
    if (exists) {
      likeable.exists.pull(exists.id);
      await likeable.save();
      await this.likeRepository.destroy(exists.id);
      isAdded = false;
    } else {
      const newLike = await this.likeRepository.create({
        user: userId,
        onModel: modelType,
        likeable: modelId,
      });
      isAdded = true;
      likeable.likes.push(newLike);
      await likeable.save();
    }
    console.log(isAdded);
    return isAdded;
  }
}

module.exports = LikeService;
