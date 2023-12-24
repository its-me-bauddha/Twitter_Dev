const passport = require("passport");

const authentication = (req, res, next) => {
  passport.authenticate("jwt", (err, user) => {
    if (err) next(err);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "unauthorized  user !!!",
        data: response,
        error: {},
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = {
  authentication,
};
