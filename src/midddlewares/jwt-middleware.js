const { ExtractJwt, Strategy } = require("passport-jwt");
const User = require("../models/user");

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "twitter_secret",
};

const passportAuth = (passport) => {
  passport.use(
    new Strategy(opts, async (jwt_payload, done) => {
      const user = await User.findById(jwt_payload.id);
      if (!user) {
        done(null, false);
      } else {
        done(null, user);
      }
    })
  );
};
module.exports = {
  passportAuth,
};
