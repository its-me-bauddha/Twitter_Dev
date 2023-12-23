const Hashtag = require("../models/hashtags");
const CrudRepository = require("./crud-repository");
class HashtagRepository extends CrudRepository {
  constructor() {
    super(Hashtag);
  }

  //! bulk or multiple tags creation
  async bulkCreate(data) {
    try {
      const hashtags = await Hashtag.insertMany(data);
      return hashtags;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  //! get hashtag by Name
  async getHashtagByName(data) {
    try {
      const hashtag = await Hashtag.find({
        text: text,
      });
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

module.exports = HashtagRepository;
