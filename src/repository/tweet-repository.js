const Tweet = require("../models/tweet");
const CrudRepository = require("./crud-repository");

class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
}

module.exports = TweetRepository;

//! CRUD operations - > Create Read Update Delete // we do not need  update
