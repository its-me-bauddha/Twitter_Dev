const HashtagRepository = require("../repository/hashtag-repository");
const TweetRepository = require("../repository/tweet-repository");

class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async create(data) {
    const content = data.content;
    const tags = content
      .match(/#+[a-zA-Z0-9(_)]+/g)
      .map((tag) => tag.substring(1).toLowerCase());
    // storing the tweets
    const tweet = await this.tweetRepository.create(data);

    // checking for already present tags
    let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    let textOfPresentTags = alreadyPresentTags.map((tags) => tags.text);
    let newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));
    // creation of new tags
    newTags = newTags.map((tag) => {
      return {
        text: tag,
        tweets: [tweet.id],
      };
    });
    await this.hashtagRepository.bulkCreate(newTags);
    alreadyPresentTags.forEach((tag) => {
      tag.tweet.push(tweet.id);
    });

    return tweet;
  }

  async getTweet(tweetId) {
    const tweet = await this.tweetRepository.get(tweetId);
    return tweet;
  }
}

module.exports = TweetService;
