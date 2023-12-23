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
      .map((tag) => tag.substring(1).toLoweCase());
    // storing the tweets
    const tweet = await this.tweetRepository.create(data);

    // checking for already present tags
    const alreadyPresentTags = await this.hashtagRepository.findByName(tags);
    const textOfPresentTags = alreadyPresentTags.map((tags) => tags.text);
    const newTags = tags.filter((tag) => !textOfPresentTags.includes(tag));
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
    const tweet = await this.tweetRepository.getTweet(tweetId);
    return tweet;
  }
}

module.exports = TweetService;
